import { Candidato } from '@/types';

export const candidatos: Candidato[] = [
  {
    id: "1",
    nombre: "César Acuña Peralta",
    partido_id: "1",
    cargo: "presidente",
    foto_url: "/candidatos/cesar_acuna.jpg",
    hoja_vida_url: "/hojas_vida/cesar_acuna_hv.pdf",
    propuestas: {
      economia: [
        "Crear 2 millones de empleos formales",
        "Reducir la informalidad del 70% al 50%",
        "Incrementar el PBI a 5% anual",
        "Apoyo financiero a MYPES con tasas preferenciales"
      ],
      educacion: [
        "Presupuesto educativo de 6% del PBI",
        "Internet gratis en todas las escuelas públicas",
        "Laptop para cada estudiante de secundaria",
        "Incremento salarial progresivo para docentes"
      ],
      salud: [
        "Sistema de salud universal y gratuito",
        "Construcción de 100 nuevos hospitales",
        "Seguro de salud para todos los peruanos",
        "Medicamentos gratuitos para enfermedades crónicas"
      ]
    },
    actividades: [
      {
        id: "a1",
        fecha: "2025-11-10T00:00:00Z",
        tipo: "evento",
        titulo: "Lanzamiento de candidatura",
        descripcion: "Ceremonia oficial de presentación de la candidatura presidencial en Lima.",
        fuente: "APP Oficial"
      },
      {
        id: "a2",
        fecha: "2025-11-25T00:00:00Z",
        tipo: "propuesta",
        titulo: "Presentación del Plan Económico",
        descripcion: "Exposición del plan económico para la reactivación del país.",
        fuente: "APP Oficial"
      }
    ],
    noticias: [
      {
        id: "n1",
        titulo: "César Acuña presenta plan educativo",
        resumen: "El candidato presidencial presentó su propuesta de llevar el presupuesto educativo al 6% del PBI.",
        url: "https://elcomercio.pe/politica/acuna-plan-educativo",
        fuente: "El Comercio",
        fecha_publicacion: "2025-11-15T00:00:00Z",
        categorias: ["Educación", "Política"]
      }
    ]
  },
  {
    id: "2",
    nombre: "Keiko Fujimori",
    partido_id: "2",
    cargo: "presidente",
    foto_url: "/candidatos/keiko_fujimori.jpg",
    hoja_vida_url: "/hojas_vida/keiko_fujimori_hv.pdf",
    propuestas: {
      economia: [
        "Estabilidad macroeconómica garantizada",
        "Reactivación de la inversión privada",
        "Reducción de impuestos a empresas generadoras de empleo",
        "Modernización de puertos y aeropuertos"
      ],
      seguridad: [
        "Ley de mano dura contra la delincuencia",
        "Modernización de la Policía Nacional",
        "Aumento de efectivos policiales en 30,000",
        "Cárceles de máxima seguridad"
      ],
      educacion: [
        "Meritocracia en la educación pública",
        "Evaluación permanente de docentes",
        "Más institutos técnicos de calidad",
        "Becas universitarias para estudiantes destacados"
      ]
    },
    actividades: [
      {
        id: "a3",
        fecha: "2025-11-05T00:00:00Z",
        tipo: "declaracion",
        titulo: "Propuesta de seguridad ciudadana",
        descripcion: "Presentación del plan de seguridad con enfoque en la lucha contra el crimen organizado.",
        fuente: "Fuerza Popular"
      }
    ],
    noticias: [
      {
        id: "n2",
        titulo: "Fujimori anuncia plan de seguridad",
        resumen: "La candidata presentó su estrategia integral de seguridad ciudadana.",
        url: "https://elcomercio.pe/politica/fujimori-seguridad",
        fuente: "El Comercio",
        fecha_publicacion: "2025-11-08T00:00:00Z",
        categorias: ["Seguridad", "Política"]
      }
    ]
  },
  {
    id: "3",
    nombre: "Yonhy Lescano",
    partido_id: "3",
    cargo: "presidente",
    foto_url: "/candidatos/yonhy_lescano.jpg",
    hoja_vida_url: "/hojas_vida/yonhy_lescano_hv.pdf",
    propuestas: {
      economia: [
        "Economía social de mercado con inclusión",
        "Apoyo decidido a la agricultura familiar",
        "Desarrollo del turismo sostenible",
        "Descentralización efectiva del presupuesto"
      ],
      medio_ambiente: [
        "Protección de la Amazonía peruana",
        "Transición a energías renovables",
        "Gestión sostenible del agua",
        "Reforestación de áreas degradadas"
      ],
      educacion: [
        "Fortalecimiento de universidades públicas",
        "Promoción de la investigación científica",
        "Educación cívica y en valores",
        "Revaloración de la carrera docente"
      ]
    },
    actividades: [
      {
        id: "a4",
        fecha: "2025-11-12T00:00:00Z",
        tipo: "evento",
        titulo: "Recorrido por comunidades andinas",
        descripcion: "Visita a comunidades de Cusco y Puno para escuchar sus demandas.",
        fuente: "Acción Popular"
      }
    ],
    noticias: [
      {
        id: "n3",
        titulo: "Lescano propone protección ambiental",
        resumen: "El candidato de Acción Popular presentó su plan de protección de la Amazonía.",
        url: "https://elcomercio.pe/politica/lescano-ambiente",
        fuente: "El Comercio",
        fecha_publicacion: "2025-11-14T00:00:00Z",
        categorias: ["Medio Ambiente", "Política"]
      }
    ]
  },
  {
    id: "4",
    nombre: "Julio Guzmán",
    partido_id: "4",
    cargo: "presidente",
    foto_url: "/candidatos/julio_guzman.jpg",
    hoja_vida_url: "/hojas_vida/julio_guzman_hv.pdf",
    propuestas: {
      economia: [
        "Economía verde y digital",
        "Impulso al emprendimiento innovador",
        "Gobierno digital y transparente",
        "Comercio exterior responsable"
      ],
      educacion: [
        "Educación para el siglo XXI",
        "Desarrollo del pensamiento crítico",
        "Fomento de STEM desde primaria",
        "Educación bilingüe intercultural"
      ],
      justicia: [
        "Reforma integral del sistema de justicia",
        "Independencia del Poder Judicial",
        "Lucha frontal contra la corrupción",
        "Justicia restaurativa y preventiva"
      ]
    },
    actividades: [
      {
        id: "a5",
        fecha: "2025-11-18T00:00:00Z",
        tipo: "propuesta",
        titulo: "Plan de gobierno digital",
        descripcion: "Presentación del plan de digitalización del Estado peruano.",
        fuente: "Partido Morado"
      }
    ],
    noticias: [
      {
        id: "n4",
        titulo: "Guzmán propone reforma judicial",
        resumen: "El candidato del Partido Morado presentó su plan de reforma del sistema de justicia.",
        url: "https://elcomercio.pe/politica/guzman-justicia",
        fuente: "El Comercio",
        fecha_publicacion: "2025-11-20T00:00:00Z",
        categorias: ["Justicia", "Política"]
      }
    ]
  },
  {
    id: "5",
    nombre: "Vladimir Cerrón",
    partido_id: "5",
    cargo: "presidente",
    foto_url: "/candidatos/vladimir_cerron.jpg",
    hoja_vida_url: "/hojas_vida/vladimir_cerron_hv.pdf",
    propuestas: {
      economia: [
        "Renegociación de contratos con empresas mineras",
        "Industrialización de recursos naturales",
        "Mayor rol del Estado en la economía",
        "Apoyo a empresas comunales y cooperativas"
      ],
      trabajo: [
        "Defensa irrestricta de derechos laborales",
        "Incremento del salario mínimo a S/1,500",
        "Formalización progresiva del empleo",
        "Protección a trabajadores del Estado"
      ],
      educacion: [
        "Educación pública gratuita y de calidad",
        "Revaloración de la carrera docente",
        "Segunda reforma agraria educativa",
        "Educación intercultural obligatoria"
      ]
    },
    actividades: [
      {
        id: "a6",
        fecha: "2025-11-22T00:00:00Z",
        tipo: "evento",
        titulo: "Convención nacional del partido",
        descripcion: "Reunión con delegados de todo el país para definir estrategia electoral.",
        fuente: "Perú Libre"
      }
    ],
    noticias: [
      {
        id: "n5",
        titulo: "Cerrón plantea nueva política minera",
        resumen: "El líder de Perú Libre propone renegociar contratos con empresas mineras.",
        url: "https://elcomercio.pe/politica/cerron-mineria",
        fuente: "El Comercio",
        fecha_publicacion: "2025-11-23T00:00:00Z",
        categorias: ["Economía", "Política"]
      }
    ]
  },
  {
    id: "6",
    nombre: "María Rodríguez",
    partido_id: "1",
    cargo: "diputado",
    foto_url: "/candidatos/maria_rodriguez.jpg",
    propuestas: {
      educacion: [
        "Infraestructura educativa moderna",
        "Programas de inclusión educativa"
      ],
      salud: [
        "Centros de salud en zonas rurales",
        "Atención materno-infantil prioritaria"
      ]
    },
    actividades: [],
    noticias: []
  },
  {
    id: "7",
    nombre: "Juan Pérez",
    partido_id: "2",
    cargo: "senador",
    foto_url: "/candidatos/juan_perez.jpg",
    propuestas: {
      economia: [
        "Desarrollo de pequeñas empresas",
        "Microcréditos accesibles"
      ],
      seguridad: [
        "Seguridad ciudadana en barrios",
        "Prevención del delito juvenil"
      ]
    },
    actividades: [],
    noticias: []
  },
  {
    id: "8",
    nombre: "Ana Torres",
    partido_id: "3",
    cargo: "parlamento_andino",
    foto_url: "/candidatos/ana_torres.jpg",
    propuestas: {
      politica_exterior: [
        "Integración andina efectiva",
        "Cooperación regional en seguridad"
      ],
      medio_ambiente: [
        "Protección transfronteriza de ecosistemas",
        "Cambio climático regional"
      ]
    },
    actividades: [],
    noticias: []
  }
];
