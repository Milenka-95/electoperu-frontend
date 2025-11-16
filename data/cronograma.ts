import { EventoCronograma } from '@/types';

export const cronograma: EventoCronograma[] = [
  {
    id: "1",
    tipo: "inscripcion",
    fecha: "2025-01-15T00:00:00Z",
    fecha_fin: "2025-02-15T23:59:59Z",
    titulo: "Inscripción de fórmulas presidenciales",
    descripcion: "Periodo para la inscripción de candidaturas a la presidencia y vicepresidencias ante el Jurado Nacional de Elecciones.",
    obligatorio: true,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "candidatos"
  },
  {
    id: "2",
    tipo: "inscripcion",
    fecha: "2025-02-01T00:00:00Z",
    fecha_fin: "2025-03-01T23:59:59Z",
    titulo: "Inscripción de candidatos al Congreso",
    descripcion: "Periodo para inscripción de candidatos a la Cámara de Diputados, Senadores y Parlamento Andino.",
    obligatorio: true,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "candidatos"
  },
  {
    id: "3",
    tipo: "sorteo",
    fecha: "2025-12-15T10:00:00Z",
    titulo: "Sorteo de miembros de mesa",
    descripcion: "Sorteo público de ciudadanos que ejercerán como miembros de mesa en las Elecciones Generales 2026.",
    obligatorio: false,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe",
    aplica_a: "miembros_mesa"
  },
  {
    id: "4",
    tipo: "capacitacion",
    fecha: "2026-01-10T00:00:00Z",
    fecha_fin: "2026-03-20T23:59:59Z",
    titulo: "Capacitación de miembros de mesa",
    descripcion: "Periodo de capacitación obligatoria para miembros de mesa designados. Se realizarán sesiones presenciales y virtuales.",
    obligatorio: true,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe/capacitacion",
    aplica_a: "miembros_mesa"
  },
  {
    id: "5",
    tipo: "otro",
    fecha: "2026-03-01T00:00:00Z",
    fecha_fin: "2026-03-15T23:59:59Z",
    titulo: "Presentación de planes de gobierno",
    descripcion: "Plazo final para que los partidos políticos presenten sus planes de gobierno detallados ante el JNE.",
    obligatorio: true,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "candidatos"
  },
  {
    id: "6",
    tipo: "otro",
    fecha: "2026-03-25T00:00:00Z",
    titulo: "Publicación del padrón electoral",
    descripcion: "RENIEC publica el padrón electoral oficial con la relación de todos los ciudadanos habilitados para votar.",
    obligatorio: false,
    fuente: "RENIEC",
    url_oficial: "https://www.reniec.gob.pe",
    aplica_a: "ciudadanos"
  },
  {
    id: "7",
    tipo: "otro",
    fecha: "2026-03-30T00:00:00Z",
    fecha_fin: "2026-04-05T23:59:59Z",
    titulo: "Campaña electoral - Primera vuelta",
    descripcion: "Inicio oficial de la campaña electoral para la primera vuelta de las Elecciones Generales 2026.",
    obligatorio: false,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "todos"
  },
  {
    id: "8",
    tipo: "miembros_mesa",
    fecha: "2026-04-03T00:00:00Z",
    titulo: "Recojo de material electoral - Miembros de mesa",
    descripcion: "Los miembros de mesa deben recoger el material electoral en las sedes de la ONPE designadas.",
    obligatorio: true,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe",
    aplica_a: "miembros_mesa"
  },
  {
    id: "9",
    tipo: "eleccion",
    fecha: "2026-04-05T08:00:00Z",
    fecha_fin: "2026-04-05T16:00:00Z",
    titulo: "Elecciones Generales 2026 - Primera Vuelta",
    descripcion: "Día de votación para elegir Presidente, Vicepresidentes, Congresistas (Diputados y Senadores) y representantes al Parlamento Andino.",
    obligatorio: true,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe/elecciones2026",
    aplica_a: "todos"
  },
  {
    id: "10",
    tipo: "otro",
    fecha: "2026-04-10T00:00:00Z",
    titulo: "Proclamación de resultados oficiales - Primera vuelta",
    descripcion: "El JNE proclama los resultados oficiales de la primera vuelta electoral.",
    obligatorio: false,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "todos"
  },
  {
    id: "11",
    tipo: "otro",
    fecha: "2026-04-20T00:00:00Z",
    fecha_fin: "2026-05-25T23:59:59Z",
    titulo: "Campaña electoral - Segunda vuelta",
    descripcion: "Campaña electoral entre las dos fórmulas presidenciales más votadas (si ninguna alcanza el 50% + 1 en primera vuelta).",
    obligatorio: false,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "todos"
  },
  {
    id: "12",
    tipo: "miembros_mesa",
    fecha: "2026-05-23T00:00:00Z",
    titulo: "Recojo de material electoral - Segunda vuelta",
    descripcion: "Los miembros de mesa deben recoger el material electoral para la segunda vuelta.",
    obligatorio: true,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe",
    aplica_a: "miembros_mesa"
  },
  {
    id: "13",
    tipo: "eleccion",
    fecha: "2026-05-26T08:00:00Z",
    fecha_fin: "2026-05-26T16:00:00Z",
    titulo: "Elecciones Generales 2026 - Segunda Vuelta",
    descripcion: "Segunda vuelta electoral para elegir al Presidente y Vicepresidentes de la República.",
    obligatorio: true,
    fuente: "ONPE",
    url_oficial: "https://www.onpe.gob.pe/elecciones2026",
    aplica_a: "todos"
  },
  {
    id: "14",
    tipo: "otro",
    fecha: "2026-06-01T00:00:00Z",
    titulo: "Proclamación del Presidente electo",
    descripcion: "El JNE proclama oficialmente al Presidente y Vicepresidentes electos del Perú.",
    obligatorio: false,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "todos"
  },
  {
    id: "15",
    tipo: "otro",
    fecha: "2026-07-28T00:00:00Z",
    titulo: "Asunción del mando presidencial",
    descripcion: "Ceremonia de asunción del mando del Presidente electo y juramentación ante el Congreso de la República.",
    obligatorio: false,
    fuente: "JNE",
    url_oficial: "https://portal.jne.gob.pe",
    aplica_a: "todos"
  }
];
