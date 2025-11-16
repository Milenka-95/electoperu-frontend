'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { resultadosApi } from '@/lib/api';
import type { ResultadosMesa } from '@/types';

function ResultadosContent() {
  const searchParams = useSearchParams();
  const [resultados, setResultados] = useState<ResultadosMesa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const mesaId = searchParams.get('mesaId');
    if (mesaId) {
      loadResultados(parseInt(mesaId));
    } else {
      setError('No se especificó una mesa');
      setLoading(false);
    }
  }, [searchParams]);

  const loadResultados = async (mesaId: number) => {
    try {
      const data = await resultadosApi.getByMesa(mesaId);
      setResultados(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar resultados');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Resultados de Votación
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {resultados && (
            <>
              <Card className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Mesa #{resultados.mesaId}
                    </h2>
                    <p className="text-gray-600">Resultados actualizados en tiempo real</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-blue-700">
                      {resultados.totalVotos}
                    </div>
                    <div className="text-sm text-gray-600">Total de votos</div>
                  </div>
                </div>
              </Card>

              <Card title="Resultados por Candidato">
                <div className="space-y-4">
                  {resultados.resultados
                    .sort((a, b) => b.votos - a.votos)
                    .map((resultado, index) => {
                      const porcentaje = resultados.totalVotos > 0
                        ? (resultado.votos / resultados.totalVotos) * 100
                        : 0;
                      
                      return (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                                {index + 1}
                              </span>
                              <span className="font-semibold text-gray-900 text-lg">
                                {resultado.candidato}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">
                                {resultado.votos}
                              </div>
                              <div className="text-sm text-gray-600">
                                {porcentaje.toFixed(1)}%
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-blue-700 h-full rounded-full transition-all duration-500"
                              style={{ width: `${porcentaje}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Card>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🥇</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {resultados.resultados.length > 0 
                        ? resultados.resultados.sort((a, b) => b.votos - a.votos)[0].candidato
                        : 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600">Primer lugar</div>
                  </div>
                </Card>
                
                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {resultados.totalVotos}
                    </div>
                    <div className="text-sm text-gray-600">Votos contabilizados</div>
                  </div>
                </Card>

                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {resultados.resultados.length}
                    </div>
                    <div className="text-sm text-gray-600">Candidatos</div>
                  </div>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function ResultadosPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ResultadosContent />
    </Suspense>
  );
}
