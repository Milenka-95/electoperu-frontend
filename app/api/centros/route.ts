import { NextRequest, NextResponse } from 'next/server';
import { centrosVotacion } from '@/data/centros-votacion';
import { PaginatedResponse, CentroVotacion } from '@/types';

// Función para calcular distancia entre dos puntos (fórmula Haversine simplificada)
function calcularDistancia(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de paginación
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    
    // Parámetros de búsqueda y filtro
    const q = searchParams.get('q')?.toLowerCase();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const radius = parseFloat(searchParams.get('radius') || '5'); // Radio en km
    const distrito = searchParams.get('distrito')?.toLowerCase();
    const mesaNumero = searchParams.get('mesa');
    
    // Filtrar centros de votación
    let centrosFiltrados = [...centrosVotacion];
    
    if (q) {
      centrosFiltrados = centrosFiltrados.filter(centro => 
        centro.nombre.toLowerCase().includes(q) ||
        centro.direccion.toLowerCase().includes(q) ||
        centro.distrito.toLowerCase().includes(q)
      );
    }
    
    if (distrito) {
      centrosFiltrados = centrosFiltrados.filter(centro => 
        centro.distrito.toLowerCase().includes(distrito)
      );
    }
    
    if (mesaNumero) {
      centrosFiltrados = centrosFiltrados.filter(centro => 
        centro.mesas.some(mesa => mesa.numero === mesaNumero)
      );
    }
    
    // Filtrar por geolocalización si se proporcionan coordenadas
    if (lat && lng) {
      const latNum = parseFloat(lat);
      const lngNum = parseFloat(lng);
      
      centrosFiltrados = centrosFiltrados
        .map(centro => ({
          ...centro,
          distancia: calcularDistancia(latNum, lngNum, centro.coords.lat, centro.coords.lng)
        }))
        .filter(centro => centro.distancia <= radius)
        .sort((a, b) => a.distancia - b.distancia);
    }
    
    // Aplicar paginación
    const total = centrosFiltrados.length;
    const totalPages = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedCentros = centrosFiltrados.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<CentroVotacion> = {
      data: paginatedCentros,
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
        message: 'Error al obtener los centros de votación',
        data: []
      },
      { status: 500 }
    );
  }
}
