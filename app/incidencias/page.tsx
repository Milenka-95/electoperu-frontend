'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { incidenciasApi, authApi } from '@/lib/api';
import type { TipoIncidencia } from '@/types';

export default function IncidenciasPage() {
  const [tiposIncidencia, setTiposIncidencia] = useState<TipoIncidencia[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<number | null>(null);
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadTiposIncidencia();
  }, []);

  const loadTiposIncidencia = async () => {
    try {
      const tipos = await incidenciasApi.getTipos();
      setTiposIncidencia(tipos);
      if (tipos.length > 0) {
        setSelectedTipo(tipos[0].id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar tipos de incidencia');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = authApi.getCurrentUser();
    if (!user || !user.mesaAsignadaId) {
      setError('Debes estar autenticado y tener una mesa asignada para reportar incidencias');
      return;
    }

    if (!selectedTipo || !descripcion.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await incidenciasApi.registrar({
        mesaId: user.mesaAsignadaId,
        descripcion,
        tipoIncidenciaId: selectedTipo,
        usuarioId: user.id,
      });

      setSuccess(true);
      setDescripcion('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar la incidencia');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Registrar Incidencia
          </h1>

          <Card title="Reportar Problema o Situación">
            <p className="text-gray-600 mb-6">
              Utiliza este formulario para reportar cualquier problema o situación 
              irregular durante el proceso electoral.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                ✓ Incidencia registrada exitosamente
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Tipo de Incidencia
                </label>
                <div className="space-y-2">
                  {tiposIncidencia.map((tipo) => (
                    <label
                      key={tipo.id}
                      className="flex items-start p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                      style={{
                        borderColor: selectedTipo === tipo.id ? '#1e40af' : '#e5e7eb',
                        backgroundColor: selectedTipo === tipo.id ? '#eff6ff' : 'white',
                      }}
                    >
                      <input
                        type="radio"
                        name="tipoIncidencia"
                        value={tipo.id}
                        checked={selectedTipo === tipo.id}
                        onChange={() => setSelectedTipo(tipo.id)}
                        className="mt-1 mr-3"
                        disabled={submitting}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{tipo.nombre}</div>
                        <div className="text-sm text-gray-600">{tipo.descripcion}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción Detallada
                </label>
                <textarea
                  id="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe la situación con el mayor detalle posible..."
                  required
                  disabled={submitting}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Incluye fecha, hora, personas involucradas y cualquier otro detalle relevante.
                </p>
              </div>

              <Button
                type="submit"
                variant="danger"
                className="w-full"
                disabled={submitting || loading}
              >
                {submitting ? 'Registrando...' : '⚠️ Registrar Incidencia'}
              </Button>
            </form>
          </Card>

          <Card className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Casos de Uso</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Falta de materiales electorales</li>
              <li>• Problemas con el padrón electoral</li>
              <li>• Ausencia de miembros de mesa</li>
              <li>• Interrupciones en el suministro eléctrico</li>
              <li>• Situaciones de seguridad</li>
              <li>• Irregularidades en el proceso</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
