import { NextRequest, NextResponse } from 'next/server';
import { Reporte, ApiResponse } from '@/types';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const REPORTES_FILE = join(process.cwd(), 'data', 'reportes', 'reportes.json');

// Función auxiliar para leer reportes
async function leerReportes(): Promise<Reporte[]> {
  try {
    const data = await readFile(REPORTES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // Si el archivo no existe, devolver array vacío
    return [];
  }
}

// Función auxiliar para guardar reportes
async function guardarReportes(reportes: Reporte[]): Promise<void> {
  await writeFile(REPORTES_FILE, JSON.stringify(reportes, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.tipo || !body.titulo || !body.descripcion) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Faltan campos requeridos: tipo, titulo, descripcion',
          data: null
        },
        { status: 400 }
      );
    }
    
    // Crear nuevo reporte
    const nuevoReporte: Reporte = {
      id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      tipo: body.tipo,
      titulo: body.titulo,
      descripcion: body.descripcion,
      ubicacion: body.ubicacion,
      centro_votacion_id: body.centro_votacion_id,
      fecha_creacion: new Date().toISOString(),
      estado: 'pendiente',
      email_contacto: body.email_contacto
    };
    
    // Leer reportes existentes
    const reportes = await leerReportes();
    
    // Agregar nuevo reporte
    reportes.push(nuevoReporte);
    
    // Guardar reportes
    await guardarReportes(reportes);
    
    const response: ApiResponse<Reporte> = {
      data: nuevoReporte,
      success: true,
      message: 'Reporte creado exitosamente'
    };
    
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error al crear reporte:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al crear el reporte',
        data: null
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de filtro
    const tipo = searchParams.get('tipo');
    const estado = searchParams.get('estado');
    
    // Leer reportes
    let reportes = await leerReportes();
    
    // Filtrar reportes
    if (tipo) {
      reportes = reportes.filter(r => r.tipo === tipo);
    }
    
    if (estado) {
      reportes = reportes.filter(r => r.estado === estado);
    }
    
    // Ordenar por fecha (más recientes primero)
    reportes.sort((a, b) => {
      const fechaA = new Date(a.fecha_creacion || 0).getTime();
      const fechaB = new Date(b.fecha_creacion || 0).getTime();
      return fechaB - fechaA;
    });
    
    const response: ApiResponse<Reporte[]> = {
      data: reportes,
      success: true,
      metadata: {
        total: reportes.length,
        ultima_actualizacion: new Date().toISOString()
      }
    };
    
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al obtener los reportes',
        data: []
      },
      { status: 500 }
    );
  }
}
