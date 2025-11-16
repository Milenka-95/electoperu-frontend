'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { localesApi } from '@/lib/api';
import type { LocalVotacion } from '@/types';

export default function LocalesPage() {
  const [locales, setLocales] = useState<LocalVotacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadLocales();
  }, []);

  const loadLocales = async () => {
    try {
      const data = await localesApi.getAll();
      setLocales(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar locales de votación');
    } finally {
      setLoading(false);
    }
  };

  const filteredLocales = locales.filter(local =>
    local.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    local.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    local.distrito.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Locales de Votación
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <Card className="mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre, dirección o distrito..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-2">📍</div>
                <div className="text-2xl font-bold text-blue-700">{locales.length}</div>
                <div className="text-sm text-gray-600">Locales Totales</div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-2">🗳️</div>
                <div className="text-2xl font-bold text-blue-700">
                  {locales.reduce((sum, l) => sum + l.cantidadMesas, 0)}
                </div>
                <div className="text-sm text-gray-600">Mesas Totales</div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-blue-700">
                  {locales.reduce((sum, l) => sum + l.cantidadVotantes, 0)}
                </div>
                <div className="text-sm text-gray-600">Votantes Totales</div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            {filteredLocales.map((local) => (
              <Card key={local.id}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {local.nombre}
                    </h3>
                    <div className="space-y-1 text-gray-700">
                      <p>
                        <span className="font-medium">📍 Dirección:</span> {local.direccion}
                      </p>
                      <p>
                        <span className="font-medium">🗺️ Ubicación:</span>{' '}
                        {local.distrito}, {local.provincia}, {local.departamento}
                      </p>
                    </div>
                  </div>
                  <div className="ml-6 text-right">
                    <div className="space-y-2">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">
                          {local.cantidadMesas}
                        </div>
                        <div className="text-xs text-gray-600">Mesas</div>
                      </div>
                      <div className="bg-green-50 px-4 py-2 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">
                          {local.cantidadVotantes}
                        </div>
                        <div className="text-xs text-gray-600">Votantes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredLocales.length === 0 && (
            <Card>
              <p className="text-center text-gray-600 py-8">
                No se encontraron locales que coincidan con tu búsqueda.
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
