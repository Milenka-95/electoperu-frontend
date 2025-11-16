import { NextRequest, NextResponse } from 'next/server';
import { candidatos } from '@/data/candidatos';
import { PaginatedResponse, Candidato } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de paginación
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    
    // Parámetros de búsqueda y filtro
    const q = searchParams.get('q')?.toLowerCase();
    const cargo = searchParams.get('cargo');
    const partidoId = searchParams.get('partido_id');
    
    // Filtrar candidatos
    let candidatosFiltrados = [...candidatos];
    
    if (q) {
      candidatosFiltrados = candidatosFiltrados.filter(candidato => 
        candidato.nombre.toLowerCase().includes(q)
      );
    }
    
    if (cargo) {
      candidatosFiltrados = candidatosFiltrados.filter(candidato => 
        candidato.cargo === cargo
      );
    }
    
    if (partidoId) {
      candidatosFiltrados = candidatosFiltrados.filter(candidato => 
        candidato.partido_id === partidoId
      );
    }
    
    // Ordenar por nombre
    candidatosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    // Aplicar paginación
    const total = candidatosFiltrados.length;
    const totalPages = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedCandidatos = candidatosFiltrados.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<Candidato> = {
      data: paginatedCandidatos,
      success: true,
      metadata: {
        total,
        page,
        per_page: perPage,
        total_pages: totalPages,
        ultima_actualizacion: new Date().toISOString()
      }
    };
    
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al obtener los candidatos',
        data: []
      },
      { status: 500 }
    );
  }
}
