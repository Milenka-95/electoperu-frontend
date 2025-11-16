export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            ElectoPerú
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Sistema de Información Electoral - Elecciones Generales 2026
          </p>
          <p className="text-lg text-red-50 max-w-2xl mx-auto">
            Tu fuente confiable de información para el proceso electoral peruano. 
            Conoce a los candidatos, encuentra tu local de votación y mantente informado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Calendario Electoral</h2>
            <p className="text-gray-600 mb-4">Conoce las fechas importantes del proceso electoral</p>
            <a href="/api/cronograma" className="text-red-600 font-semibold hover:text-red-800">
              Ver API →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🗳️</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Partidos Políticos</h2>
            <p className="text-gray-600 mb-4">Información sobre agrupaciones políticas y sus propuestas</p>
            <span className="text-red-600 font-semibold hover:text-red-800 cursor-pointer">
              Ver API →
            </span>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Candidatos</h2>
            <p className="text-gray-600 mb-4">Hojas de vida, propuestas y noticias de candidatos</p>
            <a href="/api/candidatos" className="text-red-600 font-semibold hover:text-red-800">
              Ver API →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Tu Local de Votación</h2>
            <p className="text-gray-600 mb-4">Encuentra tu centro y mesa de votación</p>
            <a href="/api/centros" className="text-red-600 font-semibold hover:text-red-800">
              Ver API →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Información para Miembros de Mesa</h2>
          <p className="text-gray-600 mb-4">
            ¿Fuiste sorteado como miembro de mesa? Consulta tus responsabilidades y el proceso a seguir.
          </p>
          <a href="/api/miembros-mesa" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Ver Información
          </a>
        </div>

        <div className="bg-red-900 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">API Backend Implementada</h2>
          <div className="space-y-2">
            <p>✅ GET /api/cronograma - Calendario electoral con filtros</p>
            <p>✅ GET /api/partidos - Lista de partidos políticos</p>
            <p>✅ GET /api/partidos/[id] - Detalles de un partido</p>
            <p>✅ GET /api/candidatos - Búsqueda de candidatos</p>
            <p>✅ GET /api/centros - Centros de votación con geolocalización</p>
            <p>✅ GET /api/miembros-mesa - Información para miembros de mesa</p>
            <p>✅ POST /api/report - Reportes ciudadanos</p>
            <p>✅ PWA con soporte offline (Service Worker + Manifest)</p>
          </div>
        </div>

        <footer className="mt-12 text-center text-red-100">
          <p className="mb-2">
            Fuentes oficiales: ONPE, JNE, RENIEC
          </p>
          <p className="text-sm">
            Elecciones Generales 2026 - República del Perú
          </p>
        </footer>
      </main>
    </div>
  );
}
