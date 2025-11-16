'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { mesaApi, authApi } from '@/lib/api';
import type { Mesa } from '@/types';

export default function MesaPanelPage() {
  const [mesa, setMesa] = useState<Mesa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMesa = async () => {
      try {
        const user = authApi.getCurrentUser();
        if (!user || !user.mesaAsignadaId) {
          setError('No tienes una mesa asignada. Contacta al administrador.');
          setLoading(false);
          return;
        }

        const mesaData = await mesaApi.getById(user.mesaAsignadaId);
        setMesa(mesaData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar la información de la mesa.');
      } finally {
        setLoading(false);
      }
    };

    loadMesa();
  }, []);

  const handleStartVoting = () => {
    alert('Iniciando proceso de votación...');
    // In real implementation: update mesa status via API
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Panel de Mesa de Votación
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {mesa && (
            <>
              <Card className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Mesa Nº {mesa.numeroMesa}
                    </h2>
                    <p className="text-gray-600">Local de Votación ID: {mesa.localVotacionId}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-700">
                      {mesa.cantidadElectores}
                    </div>
                    <div className="text-sm text-gray-600">Electores asignados</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Miembros de Mesa
                    </h3>
                    {mesa.miembrosMesa && mesa.miembrosMesa.length > 0 ? (
                      <ul className="space-y-2">
                        {mesa.miembrosMesa.map((miembro, index) => (
                          <li 
                            key={miembro.id}
                            className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-gray-900">{miembro.nombre}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">No hay miembros asignados</p>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Acciones Rápidas
                    </h3>
                    <div className="space-y-3">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={handleStartVoting}
                      >
                        🗳️ Iniciar Proceso de Votación
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => window.location.href = '/electores/buscar'}
                      >
                        🔍 Buscar Elector
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => window.location.href = '/incidencias'}
                      >
                        ⚠️ Reportar Incidencia
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => window.location.href = `/resultados?mesaId=${mesa.id}`}
                      >
                        📊 Ver Resultados
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {mesa.cantidadElectores}
                    </div>
                    <div className="text-sm text-gray-600">Total Electores</div>
                  </div>
                </Card>

                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-sm text-gray-600">Votos Registrados</div>
                  </div>
                </Card>

                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-2">⏳</div>
                    <div className="text-2xl font-bold text-yellow-600">
                      {mesa.cantidadElectores}
                    </div>
                    <div className="text-sm text-gray-600">Pendientes</div>
                  </div>
                </Card>
              </div>

              <Card className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Instrucciones para Miembros de Mesa
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <strong>Instalación:</strong> Verificar que todos los materiales 
                      estén completos y en buen estado.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <strong>Sufragio:</strong> Verificar la identidad de cada elector 
                      antes de permitir el voto.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <strong>Cierre:</strong> Realizar el conteo de votos y completar 
                      el acta correspondiente.
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
