'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import { electoresApi } from '@/lib/api';
import type { Elector } from '@/types';

export default function BuscarElectorPage() {
  const [dni, setDni] = useState('');
  const [elector, setElector] = useState<Elector | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registering, setRegistering] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setElector(null);

    try {
      const result = await electoresApi.getByDni(dni);
      setElector(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se encontró el elector. Verifica el DNI ingresado.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterVote = async () => {
    if (!elector) return;

    setRegistering(true);
    setError('');

    try {
      // This would redirect to voting page in a real implementation
      // For now, we'll just show a success message
      alert('Redirigiendo a la página de votación...');
      // In a real app: router.push(`/votacion?electorId=${elector.id}&mesaId=${elector.mesaVotacionId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar el voto.');
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Buscar Elector</h1>

          <Card title="Consulta por DNI">
            <p className="text-gray-600 mb-6">
              Ingresa el número de DNI para verificar la información del elector
            </p>

            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <Input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="Ingresa el DNI (8 dígitos)"
                pattern="[0-9]{8}"
                maxLength={8}
                required
                disabled={loading}
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Buscando...' : 'Buscar'}
              </Button>
            </form>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}
          </Card>

          {elector && (
            <Card className="mt-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {elector.nombres} {elector.apellidos}
                  </h2>
                  <p className="text-gray-600">DNI: {elector.dni}</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  elector.haVotado 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {elector.haVotado ? '✓ Ya votó' : 'Pendiente de votar'}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Información Personal</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-gray-600">Dirección</dt>
                      <dd className="text-gray-900">{elector.direccion}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Departamento ID</dt>
                      <dd className="text-gray-900">{elector.departamentoId}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Provincia ID</dt>
                      <dd className="text-gray-900">{elector.provinciaId}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Distrito ID</dt>
                      <dd className="text-gray-900">{elector.distritoId}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Información de Votación</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-gray-600">Mesa de Votación</dt>
                      <dd className="text-2xl font-bold text-blue-700">
                        Mesa #{elector.mesaVotacionId}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Estado</dt>
                      <dd className="text-gray-900">
                        {elector.haVotado ? 'Voto registrado' : 'Sin votar'}
                      </dd>
                    </div>
                  </dl>

                  {!elector.haVotado && (
                    <Button
                      variant="primary"
                      className="mt-6 w-full"
                      onClick={handleRegisterVote}
                      disabled={registering}
                    >
                      {registering ? 'Procesando...' : 'Registrar Voto'}
                    </Button>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> El elector debe dirigirse a su mesa asignada 
                  para ejercer su derecho al voto.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
