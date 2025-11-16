import Header from '@/components/Header';
import Card from '@/components/Card';

export default function AgrupacionesPage() {
  const tiposElecciones = [
    'Presidente y Vicepresidentes',
    'Congresistas',
    'Parlamento Andino',
  ];

  const sectores = [
    'Educación',
    'Salud',
    'Economía',
    'Seguridad',
    'Medio Ambiente',
    'Agricultura',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Agrupaciones Políticas
          </h1>
          <p className="text-gray-600 mb-8">
            Información sobre partidos políticos, candidatos y planes de gobierno para las Elecciones 2026
          </p>

          <Card title="🏛️ Información Disponible" className="mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Elecciones Generales
                </h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {tiposElecciones.map((tipo, index) => (
                    <li key={index}>• {tipo}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Planes de Gobierno por Sector
                </h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {sectores.map((sector, index) => (
                    <li key={index}>• {sector}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Planchas Presidenciales
                </h3>
                <p className="text-sm text-gray-600">
                  Candidatos a la presidencia y vicepresidencias
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📄</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Planes de Gobierno
                </h3>
                <p className="text-sm text-gray-600">
                  Propuestas por sectores y áreas temáticas
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Candidatos al Congreso
                </h3>
                <p className="text-sm text-gray-600">
                  Diputados y Senadores por circunscripción
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🌎</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Parlamento Andino
                </h3>
                <p className="text-sm text-gray-600">
                  Candidatos al organismo supranacional
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Hojas de Vida
                </h3>
                <p className="text-sm text-gray-600">
                  Información profesional y experiencia
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📰</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Noticias y Actividades
                </h3>
                <p className="text-sm text-gray-600">
                  Eventos, declaraciones y propuestas
                </p>
              </div>
            </Card>
          </div>

          <Card title="🔍 Búsqueda de Candidatos">
            <p className="text-gray-600 mb-4">
              Busca información detallada sobre candidatos y sus propuestas
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Buscar por nombre, partido o distrito..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Buscar
              </button>
            </div>
          </Card>

          <Card className="mt-6 bg-blue-50 border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="text-3xl">ℹ️</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Sobre esta Información
                </h3>
                <p className="text-blue-800 text-sm">
                  La información sobre agrupaciones políticas, candidatos y planes de gobierno 
                  es proporcionada por el Jurado Nacional de Elecciones (JNE) y la Oficina 
                  Nacional de Procesos Electorales (ONPE). Mantente informado para ejercer 
                  un voto consciente y responsable.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
