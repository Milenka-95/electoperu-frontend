import { NextRequest, NextResponse } from 'next/server';
import { cronograma } from '@/data/cronograma';
import { PaginatedResponse, EventoCronograma } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de paginación
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    
    // Parámetros de filtro
    const tipo = searchParams.get('tipo');
    const aplicaA = searchParams.get('aplica_a');
    const desde = searchParams.get('desde'); // Fecha desde (ISO)
    const hasta = searchParams.get('hasta'); // Fecha hasta (ISO)
    
    // Filtrar eventos
    let eventosFiltrados = [...cronograma];
    
    if (tipo) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.tipo === tipo);
    }
    
    if (aplicaA) {
      eventosFiltrados = eventosFiltrados.filter(evento => 
        evento.aplica_a === aplicaA || evento.aplica_a === 'todos'
      );
    }
    
    if (desde) {
      eventosFiltrados = eventosFiltrados.filter(evento => 
        new Date(evento.fecha) >= new Date(desde)
      );
    }
    
    if (hasta) {
      eventosFiltrados = eventosFiltrados.filter(evento => 
        new Date(evento.fecha) <= new Date(hasta)
      );
    }
    
    // Ordenar por fecha
    eventosFiltrados.sort((a, b) => 
      new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    );
    
    // Aplicar paginación
    const total = eventosFiltrados.length;
    const totalPages = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedEventos = eventosFiltrados.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<EventoCronograma> = {
      data: paginatedEventos,
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
        message: 'Error al obtener el cronograma electoral',
        data: []
      },
      { status: 500 }
    );
  }
}
