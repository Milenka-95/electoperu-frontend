import Header from '@/components/Header';
import Card from '@/components/Card';

export default function CalendarioPage() {
  const fechasElecciones = [
    {
      tipo: 'Primera Vuelta',
      fecha: '11 de abril de 2026',
      descripcion: 'Elecciones presidenciales y congresales',
    },
    {
      tipo: 'Segunda Vuelta',
      fecha: '6 de junio de 2026',
      descripcion: 'Balotaje presidencial (si aplica)',
    },
  ];

  const fechasRelevantes = [
    { fecha: '10 de enero de 2026', evento: 'Cierre de inscripción de candidatos' },
    { fecha: '1 de febrero de 2026', evento: 'Inicio de campaña electoral' },
    { fecha: '8 de abril de 2026', evento: 'Fin de campaña electoral' },
    { fecha: '9-10 de abril de 2026', evento: 'Ley Seca' },
    { fecha: '12 de abril de 2026', evento: 'Proclamación de resultados (1ra vuelta)' },
  ];

  const fechasMiembrosMesa = [
    { fecha: '15 de febrero de 2026', evento: 'Designación de miembros de mesa' },
    { fecha: '1 de marzo de 2026', evento: 'Capacitación obligatoria' },
    { fecha: '10 de abril de 2026', evento: 'Entrega de material electoral' },
    { fecha: '11 de abril de 2026 - 7:00 AM', evento: 'Instalación de mesas' },
    { fecha: '11 de abril de 2026 - 4:00 PM', evento: 'Cierre de mesas y conteo' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Calendario Electoral 2026
          </h1>
          <p className="text-gray-600 mb-8">
            Fechas importantes para el proceso electoral del 2026 en Perú
          </p>

          <Card title="📅 Fechas de Elecciones" className="mb-6">
            <div className="space-y-4">
              {fechasElecciones.map((eleccion, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {eleccion.tipo}
                      </h3>
                      <p className="text-gray-700">{eleccion.descripcion}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-700">
                        {eleccion.fecha}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="🗓️ Fechas Relevantes del Proceso Electoral" className="mb-6">
            <div className="space-y-3">
              {fechasRelevantes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-32 text-sm font-semibold text-blue-700">
                    {item.fecha}
                  </div>
                  <div className="flex-1 text-gray-900">{item.evento}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="👥 Calendario para Miembros de Mesa" className="mb-6">
            <p className="text-gray-600 mb-4">
              Fechas importantes para ciudadanos designados como miembros de mesa
            </p>
            <div className="space-y-3">
              {fechasMiembrosMesa.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 bg-yellow-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.evento}</div>
                    <div className="text-sm text-gray-600">{item.fecha}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-red-50 border-2 border-red-200">
            <div className="flex items-start gap-3">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">
                  Recordatorio Importante
                </h3>
                <p className="text-red-800">
                  El voto es obligatorio en el Perú para ciudadanos entre 18 y 70 años. 
                  La multa por no votar puede llegar hasta S/ 92.00 soles.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
