import { Partido } from '@/types';

export const partidos: Partido[] = [
  {
    id: "1",
    nombre: "Alianza para el Progreso",
    sigla: "APP",
    logo_url: "/logos/app.png",
    plan_gobierno_url: "/planes/app_plan_gobierno_2026.pdf",
    propuestas_por_sector: {
      economia: [
        "Reactivación económica post-pandemia",
        "Incentivos fiscales para MYPES",
        "Modernización del sistema tributario",
        "Promoción de inversión privada responsable"
      ],
      educacion: [
        "Incremento del presupuesto educativo al 6% del PBI",
        "Mejora de infraestructura educativa",
        "Capacitación continua de docentes",
        "Acceso universal a internet en escuelas"
      ],
      salud: [
        "Fortalecimiento del sistema de salud pública",
        "Programa nacional de vacunación",
        "Incremento de camas UCI",
        "Telemedicina en zonas rurales"
      ],
      seguridad: [
        "Reforma integral de la Policía Nacional",
        "Modernización tecnológica para combate al crimen",
        "Prevención del delito con enfoque social"
      ]
    },
    fundacion: "2001",
    descripcion: "Partido político peruano de tendencia de centroderecha, fundado en La Libertad."
  },
  {
    id: "2",
    nombre: "Fuerza Popular",
    sigla: "FP",
    logo_url: "/logos/fp.png",
    plan_gobierno_url: "/planes/fp_plan_gobierno_2026.pdf",
    propuestas_por_sector: {
      economia: [
        "Estabilidad macroeconómica",
        "Reducción de la informalidad laboral",
        "Impulso a la agricultura tecnificada",
        "Desarrollo de infraestructura nacional"
      ],
      educacion: [
        "Reforma educativa integral",
        "Meritocracia en la educación pública",
        "Educación técnica y profesional",
        "Becas para estudiantes de bajos recursos"
      ],
      salud: [
        "Seguro de salud universal",
        "Hospitales modernos en todo el país",
        "Fortalecimiento de la atención primaria",
        "Programa de salud mental comunitaria"
      ],
      seguridad: [
        "Mano dura contra la delincuencia",
        "Reforma del sistema penitenciario",
        "Lucha frontal contra el narcotráfico"
      ]
    },
    fundacion: "2010",
    descripcion: "Partido político peruano de derecha, liderado por Keiko Fujimori."
  },
  {
    id: "3",
    nombre: "Acción Popular",
    sigla: "AP",
    logo_url: "/logos/ap.png",
    plan_gobierno_url: "/planes/ap_plan_gobierno_2026.pdf",
    propuestas_por_sector: {
      economia: [
        "Economía social de mercado",
        "Desarrollo regional descentralizado",
        "Apoyo a la agricultura familiar",
        "Turismo sostenible"
      ],
      educacion: [
        "Educación pública de calidad",
        "Universidades públicas fortalecidas",
        "Investigación científica y tecnológica",
        "Educación cívica y valores"
      ],
      salud: [
        "Sistema nacional de salud integrado",
        "Medicina preventiva y comunitaria",
        "Atención especializada descentralizada"
      ],
      medio_ambiente: [
        "Protección de recursos naturales",
        "Energías renovables",
        "Gestión responsable del agua",
        "Conservación de la Amazonía"
      ]
    },
    fundacion: "1956",
    descripcion: "Partido político histórico del Perú, fundado por Fernando Belaúnde Terry."
  },
  {
    id: "4",
    nombre: "Partido Morado",
    sigla: "PM",
    logo_url: "/logos/pm.png",
    plan_gobierno_url: "/planes/pm_plan_gobierno_2026.pdf",
    propuestas_por_sector: {
      economia: [
        "Economía verde y sostenible",
        "Emprendimiento innovador",
        "Comercio justo y responsable",
        "Digitalización de servicios públicos"
      ],
      educacion: [
        "Educación del siglo XXI",
        "Pensamiento crítico y creatividad",
        "Educación bilingüe intercultural",
        "STEM en todos los niveles"
      ],
      salud: [
        "Salud mental como prioridad",
        "Prevención de enfermedades crónicas",
        "Atención integral a adultos mayores",
        "Telesalud universal"
      ],
      justicia: [
        "Reforma del sistema de justicia",
        "Independencia judicial",
        "Lucha contra la corrupción",
        "Justicia restaurativa"
      ]
    },
    fundacion: "2017",
    descripcion: "Partido político progresista y liberal del Perú."
  },
  {
    id: "5",
    nombre: "Perú Libre",
    sigla: "PL",
    logo_url: "/logos/pl.png",
    plan_gobierno_url: "/planes/pl_plan_gobierno_2026.pdf",
    propuestas_por_sector: {
      economia: [
        "Renegociación de contratos mineros",
        "Mayor participación del Estado en economía",
        "Industrialización del país",
        "Apoyo a cooperativas y empresas comunales"
      ],
      educacion: [
        "Educación pública gratuita y de calidad",
        "Segunda reforma agraria educativa",
        "Revaloración de la profesión docente",
        "Educación intercultural"
      ],
      salud: [
        "Sistema único de salud",
        "Gratuidad en atención médica",
        "Fortalecimiento de hospitales públicos",
        "Programa de medicina comunitaria"
      ],
      trabajo: [
        "Defensa de los derechos laborales",
        "Incremento del salario mínimo",
        "Formalización del empleo",
        "Protección a trabajadores"
      ]
    },
    fundacion: "2016",
    descripcion: "Partido político de izquierda del Perú."
  }
];
