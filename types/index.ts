// Core data types for ElectoPerú API

export interface Candidato {
  id: string;
  nombre: string;
  partido_id: string;
  cargo: 'presidente' | 'vicepresidente' | 'diputado' | 'senador' | 'parlamento_andino';
  foto_url?: string;
  hoja_vida_url?: string;
  propuestas: {
    economia?: string[];
    educacion?: string[];
    salud?: string[];
    seguridad?: string[];
    medio_ambiente?: string[];
    trabajo?: string[];
    justicia?: string[];
    politica_exterior?: string[];
  };
  actividades: Actividad[];
  noticias: Noticia[];
}

export interface Plancha {
  id: string;
  partido_id: string;
  presidente: Candidato;
  vicepresidente_primero: Candidato;
  vicepresidente_segundo: Candidato;
}

export interface Partido {
  id: string;
  nombre: string;
  sigla: string;
  logo_url?: string;
  plan_gobierno_url?: string;
  propuestas_por_sector: {
    economia?: string[];
    educacion?: string[];
    salud?: string[];
    seguridad?: string[];
    medio_ambiente?: string[];
    trabajo?: string[];
    justicia?: string[];
    politica_exterior?: string[];
  };
  fundacion?: string;
  descripcion?: string;
}

export interface EventoCronograma {
  id: string;
  tipo: 'eleccion' | 'miembros_mesa' | 'inscripcion' | 'sorteo' | 'capacitacion' | 'otro';
  fecha: string; // ISO 8601 format
  fecha_fin?: string; // Para eventos que duran varios días
  titulo: string;
  descripcion: string;
  obligatorio: boolean;
  fuente: 'ONPE' | 'JNE' | 'RENIEC';
  url_oficial?: string;
  aplica_a?: 'ciudadanos' | 'miembros_mesa' | 'candidatos' | 'todos';
}

export interface CentroVotacion {
  id: string;
  nombre: string;
  direccion: string;
  distrito: string;
  provincia: string;
  departamento: string;
  coords: {
    lat: number;
    lng: number;
  };
  mesas: Mesa[];
  accesibilidad?: string;
  referencia?: string;
}

export interface Mesa {
  mesa_id: string;
  numero: string;
  ubicacion_dentro_local: string;
  accesibilidad_info?: string;
}

export interface MiembroMesaInfo {
  id: string;
  tipo: 'instalacion' | 'sufragio' | 'escrutinio' | 'clausura' | 'general';
  titulo: string;
  descripcion: string;
  pasos: Paso[];
  documentos_pdf?: string[];
  orden: number;
}

export interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
  importante?: boolean;
}

export interface Actividad {
  id: string;
  fecha: string;
  tipo: 'evento' | 'declaracion' | 'propuesta' | 'debate';
  titulo: string;
  descripcion: string;
  fuente?: string;
  url?: string;
}

export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  url: string;
  fuente: string;
  fecha_publicacion: string;
  imagen_url?: string;
  categorias?: string[];
}

export interface Reporte {
  id?: string;
  tipo: 'irregularidad' | 'sugerencia' | 'consulta' | 'novedad';
  titulo: string;
  descripcion: string;
  ubicacion?: {
    lat: number;
    lng: number;
  };
  centro_votacion_id?: string;
  fecha_creacion?: string;
  estado?: 'pendiente' | 'revisado' | 'resuelto';
  email_contacto?: string;
}

export interface InstruccionVoto {
  id: string;
  tipo: 'presidente' | 'diputados' | 'senadores' | 'parlamento_andino' | 'general';
  titulo: string;
  contenido: string;
  imagenes?: string[];
  orden: number;
}

export interface MarcoLegal {
  id: string;
  titulo: string;
  tipo: 'ley' | 'resolucion' | 'reglamento' | 'guia';
  descripcion: string;
  url_documento: string;
  fecha_publicacion: string;
  entidad: 'JNE' | 'ONPE' | 'RENIEC' | 'Congreso';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  metadata?: {
    total?: number;
    page?: number;
    per_page?: number;
    ultima_actualizacion?: string;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  metadata: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
    ultima_actualizacion: string;
  };
}
