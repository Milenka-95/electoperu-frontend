// User and Authentication Types
export interface User {
  id: number;
  nombres: string;
  apellidos: string;
  rol: 'ADMIN' | 'OPERADOR' | 'MIEMBRO_MESA' | 'CIUDADANO';
  localVotacionId?: number;
  mesaAsignadaId?: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  usuario: User;
}

// Elector Types
export interface Elector {
  id: number;
  dni: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  departamentoId: number;
  provinciaId: number;
  distritoId: number;
  mesaVotacionId: number;
  haVotado: boolean;
}

// Mesa de Votación Types
export interface MiembroMesa {
  id: number;
  nombre: string;
}

export interface Mesa {
  id: number;
  numeroMesa: string;
  localVotacionId: number;
  cantidadElectores: number;
  miembrosMesa: MiembroMesa[];
}

// Candidato Types
export interface Candidato {
  id: number;
  nombre: string;
  partido: string;
  fotoUrl: string;
  tipoCandidato: string;
}

// Voto Types
export interface VotoRequest {
  electorId: number;
  mesaId: number;
  candidatoId: number;
  tipoEleccionId: number;
}

export interface VotoResponse {
  mensaje: string;
}

// Resultados Types
export interface ResultadoCandidato {
  candidato: string;
  votos: number;
}

export interface ResultadosMesa {
  mesaId: number;
  totalVotos: number;
  resultados: ResultadoCandidato[];
}

// Incidencia Types
export interface TipoIncidencia {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface IncidenciaRequest {
  mesaId: number;
  descripcion: string;
  tipoIncidenciaId: number;
  usuarioId: number;
}

export interface IncidenciaResponse {
  mensaje: string;
}

// Local de Votación Types
export interface LocalVotacion {
  id: number;
  nombre: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  cantidadMesas: number;
  cantidadVotantes: number;
}

// Tipo Elección Types
export interface TipoEleccion {
  id: number;
  nombre: string;
  descripcion: string;
}

// Partido Político Types
export interface PartidoPolitico {
  id: number;
  nombre: string;
  siglas: string;
  logoUrl: string;
  planGobiernoUrl?: string;
}

// Sync Types
export interface SyncData {
  votosPendientes: VotoRequest[];
  incidenciasPendientes: IncidenciaRequest[];
  horaSincronizacion: string;
}
