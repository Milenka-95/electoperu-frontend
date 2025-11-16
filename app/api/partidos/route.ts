import { NextRequest, NextResponse } from 'next/server';
import { partidos } from '@/data/partidos';
import { PaginatedResponse, Partido } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de paginación
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    
    // Parámetros de búsqueda
    const q = searchParams.get('q')?.toLowerCase();
    
    // Filtrar partidos
    let partidosFiltrados = [...partidos];
    
    if (q) {
      partidosFiltrados = partidosFiltrados.filter(partido => 
        partido.nombre.toLowerCase().includes(q) ||
        partido.sigla.toLowerCase().includes(q) ||
        partido.descripcion?.toLowerCase().includes(q)
      );
    }
    
    // Ordenar alfabéticamente
    partidosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    // Aplicar paginación
    const total = partidosFiltrados.length;
    const totalPages = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPartidos = partidosFiltrados.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<Partido> = {
      data: paginatedPartidos,
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
        message: 'Error al obtener los partidos políticos',
        data: []
      },
      { status: 500 }
    );
  }
}
