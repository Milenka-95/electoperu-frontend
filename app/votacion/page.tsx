'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { candidatosApi, tipoEleccionApi, votosApi } from '@/lib/api';
import type { Candidato, TipoEleccion } from '@/types';

function VotacionContent() {
  const searchParams = useSearchParams();
  const [tiposEleccion, setTiposEleccion] = useState<TipoEleccion[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<number | null>(null);
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);
  const [selectedCandidato, setSelectedCandidato] = useState<Candidato | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadTiposEleccion();
  }, []);

  useEffect(() => {
    if (selectedTipo) {
      loadCandidatos(selectedTipo);
    }
  }, [selectedTipo]);

  const loadTiposEleccion = async () => {
    try {
      const tipos = await tipoEleccionApi.getAll();
      setTiposEleccion(tipos);
      if (tipos.length > 0) {
        setSelectedTipo(tipos[0].id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar tipos de elección');
    } finally {
      setLoading(false);
    }
  };

  const loadCandidatos = async (tipoId: number) => {
    setLoading(true);
    setCandidatos([]);
    setSelectedCandidato(null);
    
    try {
      const data = await candidatosApi.getByTipo(tipoId);
      setCandidatos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar candidatos');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async () => {
    if (!selectedCandidato) return;

    const electorId = searchParams.get('electorId');
    const mesaId = searchParams.get('mesaId');

    if (!electorId || !mesaId || !selectedTipo) {
      setError('Faltan datos para registrar el voto');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await votosApi.registrar({
        electorId: parseInt(electorId),
        mesaId: parseInt(mesaId),
        candidatoId: selectedCandidato.id,
        tipoEleccionId: selectedTipo,
      });
      
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/electores/buscar';
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar el voto');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loading />;

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">¡Voto Registrado!</h2>
          <p className="text-gray-600">Su voto ha sido registrado exitosamente.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Seleccionar Candidato
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Tipo de Elección Selector */}
          <Card className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Tipo de Elección</h3>
            <div className="flex gap-3 flex-wrap">
              {tiposEleccion.map((tipo) => (
                <button
                  key={tipo.id}
                  onClick={() => setSelectedTipo(tipo.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedTipo === tipo.id
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tipo.nombre}
                </button>
              ))}
            </div>
          </Card>

          {/* Candidatos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {candidatos.map((candidato) => (
              <Card
                key={candidato.id}
                className={`cursor-pointer transition-all ${
                  selectedCandidato?.id === candidato.id
                    ? 'ring-4 ring-blue-700 bg-blue-50'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedCandidato(candidato)}
              >
                <div className="text-center">
                  {candidato.fotoUrl ? (
                    <Image
                      src={candidato.fotoUrl}
                      alt={candidato.nombre}
                      width={128}
                      height={128}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-4xl">
                      👤
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {candidato.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{candidato.partido}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {candidato.tipoCandidato}
                  </span>

                  {selectedCandidato?.id === candidato.id && (
                    <div className="mt-4 flex items-center justify-center text-blue-700 font-semibold">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Seleccionado
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {candidatos.length === 0 && !loading && (
            <Card>
              <p className="text-center text-gray-600">
                No hay candidatos disponibles para este tipo de elección.
              </p>
            </Card>
          )}

          {/* Confirmation Section */}
          {selectedCandidato && (
            <Card className="sticky bottom-4 bg-blue-50 border-2 border-blue-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Has seleccionado:</p>
                  <p className="text-xl font-bold text-gray-900">
                    {selectedCandidato.nombre}
                  </p>
                  <p className="text-sm text-gray-700">{selectedCandidato.partido}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setSelectedCandidato(null)}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleVote}
                    disabled={submitting}
                    size="lg"
                  >
                    {submitting ? 'Registrando...' : 'Confirmar Voto'}
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

export default function VotacionPage() {
  return (
    <Suspense fallback={<Loading />}>
      <VotacionContent />
    </Suspense>
  );
}
