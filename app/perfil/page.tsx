'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { authApi, userApi } from '@/lib/api';
import type { User } from '@/types';

export default function PerfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authApi.getCurrentUser();
    if (!currentUser) {
      router.push('/login');
      return;
    }

    loadUserData(currentUser.id);
  }, [router]);

  const loadUserData = async (userId: number) => {
    try {
      const userData = await userApi.getById(userId);
      setUser(userData);
    } catch {
      // If API fails, use local storage data
      const localUser = authApi.getCurrentUser();
      setUser(localUser);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authApi.logout();
    router.push('/login');
  };

  if (loading) return <Loading />;

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md text-center">
          <p className="text-gray-600 mb-4">No hay sesión activa</p>
          <Button onClick={() => router.push('/login')}>
            Iniciar Sesión
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Perfil de Usuario
          </h1>

          <Card>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  {user.nombres.charAt(0)}{user.apellidos.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {user.nombres} {user.apellidos}
                  </h2>
                  <p className="text-gray-600">ID: {user.id}</p>
                </div>
              </div>
              <Button variant="danger" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Información Personal
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-600">Nombres</dt>
                    <dd className="text-gray-900 font-medium">{user.nombres}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Apellidos</dt>
                    <dd className="text-gray-900 font-medium">{user.apellidos}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Rol</dt>
                    <dd>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        user.rol === 'ADMIN' ? 'bg-red-100 text-red-800' :
                        user.rol === 'MIEMBRO_MESA' ? 'bg-blue-100 text-blue-800' :
                        user.rol === 'OPERADOR' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.rol}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Asignaciones
                </h3>
                <dl className="space-y-3">
                  {user.mesaAsignadaId && (
                    <div>
                      <dt className="text-sm text-gray-600">Mesa Asignada</dt>
                      <dd className="text-2xl font-bold text-blue-700">
                        Mesa #{user.mesaAsignadaId}
                      </dd>
                      <Button
                        variant="primary"
                        size="sm"
                        className="mt-2"
                        onClick={() => router.push('/mesa/panel')}
                      >
                        Ver Panel de Mesa
                      </Button>
                    </div>
                  )}
                  {user.localVotacionId && (
                    <div>
                      <dt className="text-sm text-gray-600">Local de Votación</dt>
                      <dd className="text-gray-900 font-medium">
                        Local #{user.localVotacionId}
                      </dd>
                    </div>
                  )}
                  {!user.mesaAsignadaId && !user.localVotacionId && (
                    <p className="text-gray-600">Sin asignaciones</p>
                  )}
                </dl>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {user.rol === 'ADMIN' && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Acceso Administrativo
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Como administrador tienes acceso completo al sistema
                </p>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => router.push('/admin')}
                >
                  Panel de Administración
                </Button>
              </Card>
            )}

            {user.rol === 'MIEMBRO_MESA' && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Herramientas de Mesa
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="secondary"
                    className="w-full text-sm"
                    onClick={() => router.push('/electores/buscar')}
                  >
                    Buscar Elector
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full text-sm"
                    onClick={() => router.push('/incidencias')}
                  >
                    Reportar Incidencia
                  </Button>
                </div>
              </Card>
            )}

            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">
                Accesos Rápidos
              </h3>
              <div className="space-y-2">
                <Button
                  variant="secondary"
                  className="w-full text-sm"
                  onClick={() => router.push('/locales')}
                >
                  📍 Ver Locales de Votación
                </Button>
                <Button
                  variant="secondary"
                  className="w-full text-sm"
                  onClick={() => router.push('/calendario')}
                >
                  📅 Calendario Electoral
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
