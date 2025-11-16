'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import { authApi } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authApi.login({ username, password });
      authApi.saveAuth(response.token, response.usuario);
      
      // Redirect based on role
      switch (response.usuario.rol) {
        case 'ADMIN':
          router.push('/admin');
          break;
        case 'MIEMBRO_MESA':
          router.push('/mesa/panel');
          break;
        case 'OPERADOR':
          router.push('/electores/buscar');
          break;
        default:
          router.push('/perfil');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión. Por favor, verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card title="Iniciar Sesión">
            <p className="text-gray-600 mb-6">
              Ingresa tus credenciales para acceder al sistema electoral
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Usuario"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
                disabled={loading}
              />

              <Input
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
                disabled={loading}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Sistema electoral para:
              </p>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• Administradores</li>
                <li>• Operadores de mesa</li>
                <li>• Miembros de mesa</li>
              </ul>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Problemas para acceder?{' '}
              <a href="#" className="text-blue-700 hover:underline">
                Contactar soporte
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
