import { NextRequest, NextResponse } from 'next/server';
import { partidos } from '@/data/partidos';
import { candidatos } from '@/data/candidatos';
import { ApiResponse } from '@/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const partido = partidos.find(p => p.id === id);
    
    if (!partido) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Partido no encontrado',
          data: null
        },
        { status: 404 }
      );
    }
    
    // Obtener candidatos del partido
    const candidatosPartido = candidatos.filter(c => c.partido_id === id);
    
    const partidoConCandidatos = {
      ...partido,
      candidatos: candidatosPartido
    };
    
    const response: ApiResponse<typeof partidoConCandidatos> = {
      data: partidoConCandidatos,
      success: true,
      metadata: {
        ultima_actualizacion: new Date().toISOString()
      }
    };
    
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al obtener los detalles del partido',
        data: null
      },
      { status: 500 }
    );
  }
}
