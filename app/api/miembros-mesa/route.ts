import { NextRequest, NextResponse } from 'next/server';
import { miembrosMesaInfo } from '@/data/miembros-mesa';
import { ApiResponse, MiembroMesaInfo } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de filtro
    const tipo = searchParams.get('tipo');
    
    // Filtrar información
    let infoFiltrada = [...miembrosMesaInfo];
    
    if (tipo) {
      infoFiltrada = infoFiltrada.filter(info => info.tipo === tipo);
    }
    
    // Ordenar por orden
    infoFiltrada.sort((a, b) => a.orden - b.orden);
    
    const response: ApiResponse<MiembroMesaInfo[]> = {
      data: infoFiltrada,
      success: true,
      metadata: {
        total: infoFiltrada.length,
        ultima_actualizacion: new Date().toISOString()
      }
    };
    
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al obtener información para miembros de mesa',
        data: []
      },
      { status: 500 }
    );
  }
}
