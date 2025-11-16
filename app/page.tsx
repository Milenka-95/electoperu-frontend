import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema Electoral Perú 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aplicativo que brinda a los ciudadanos información utilitaria referida a los procesos 
            electorales del 2026. Mantente informado sobre opciones políticas y procesos electorales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Módulo de Calendario Electoral */}
          <ModuleCard
            title="Calendario Electoral"
            description="Fechas de elecciones, eventos relevantes y cronograma para miembros de mesa"
            href="/calendario"
            icon="📅"
          />

          {/* Módulo de Agrupaciones Políticas */}
          <ModuleCard
            title="Agrupaciones Políticas"
            description="Información sobre partidos, candidatos, planes de gobierno y propuestas"
            href="/agrupaciones"
            icon="🏛️"
          />

          {/* Módulo de Información para Electores */}
          <ModuleCard
            title="Información para Electores"
            description="Ubica tu lugar de votación, instrucciones de sufragio y marco legal"
            href="/electores/buscar"
            icon="🗳️"
          />

          {/* Módulo para Miembros de Mesa */}
          <ModuleCard
            title="Miembros de Mesa"
            description="Calendario de actividades, instrucciones y deberes de los miembros"
            href="/mesa/panel"
            icon="👥"
          />

          {/* Módulo de Locales de Votación */}
          <ModuleCard
            title="Locales de Votación"
            description="Consulta locales, direcciones y centros de votación"
            href="/locales"
            icon="📍"
          />

          {/* Módulo de Autenticación */}
          <ModuleCard
            title="Iniciar Sesión"
            description="Acceso para administradores, operadores y miembros de mesa"
            href="/login"
            icon="🔐"
          />

          {/* Módulo de Resultados */}
          <ModuleCard
            title="Resultados"
            description="Consulta resultados en tiempo real por mesa y distrito"
            href="/resultados"
            icon="📊"
          />

          {/* Módulo de Incidencias */}
          <ModuleCard
            title="Reportar Incidencias"
            description="Registro de problemas y situaciones durante el proceso electoral"
            href="/incidencias"
            icon="⚠️"
          />

          {/* Módulo de Administración */}
          <ModuleCard
            title="Administración"
            description="Gestión de candidatos, partidos, locales y mesas (Acceso ADMIN)"
            href="/admin"
            icon="⚙️"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Elecciones Generales 2026
            </h2>
            <p className="text-blue-700">
              Prepárate para ejercer tu derecho al voto de manera informada y responsable
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 ElectoPeru. Sistema de Información Electoral</p>
          <p className="text-gray-400 mt-2">Desarrollado para facilitar el proceso democrático</p>
        </div>
      </footer>
    </div>
  );
}

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

function ModuleCard({ title, description, href, icon }: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-500"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 text-blue-700 font-medium flex items-center">
        Acceder
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
