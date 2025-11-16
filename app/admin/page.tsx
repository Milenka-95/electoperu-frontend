import Header from '@/components/Header';
import Card from '@/components/Card';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Panel de Administración
          </h1>
          <p className="text-gray-600 mb-8">
            Gestión y configuración del sistema electoral
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">👤</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Gestión de Candidatos
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Registrar, editar y eliminar candidatos
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Partidos Políticos
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Gestionar agrupaciones políticas
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Locales de Votación
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Crear y gestionar locales de votación
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🗳️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mesas de Votación
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Configurar mesas y asignar miembros
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Padrón Electoral
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Cargar y gestionar padrón de electores
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Resultados
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Supervisar y consolidar resultados
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Ver Resultados
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">⚠️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Incidencias
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Revisar incidencias reportadas
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Ver Incidencias
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Usuarios del Sistema
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Gestionar accesos y permisos
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Administrar
                </button>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Configuración
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ajustes generales del sistema
                </p>
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  Configurar
                </button>
              </div>
            </Card>
          </div>

          <Card className="mt-6 bg-yellow-50 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">
                  Acceso Restringido
                </h3>
                <p className="text-yellow-800 text-sm">
                  Esta sección está reservada exclusivamente para usuarios con rol de Administrador. 
                  Todas las acciones realizadas aquí son registradas en el sistema para auditoría.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
