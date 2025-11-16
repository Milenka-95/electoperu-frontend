import type {
  LoginRequest,
  LoginResponse,
  Elector,
  Mesa,
  Candidato,
  VotoRequest,
  VotoResponse,
  ResultadosMesa,
  TipoIncidencia,
  IncidenciaRequest,
  IncidenciaResponse,
  LocalVotacion,
  TipoEleccion,
  PartidoPolitico,
  SyncData,
  User,
} from '@/types';

// API Base URL - should be configured via environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// Helper function to get auth token
const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper function to get headers
const getHeaders = (includeAuth = true): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

// Generic fetch wrapper with error handling
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  includeAuth = true
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...getHeaders(includeAuth),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Authentication API
export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiFetch<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }, false);
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  saveAuth: (token: string, user: User) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
};

// Electores API
export const electoresApi = {
  getByDni: async (dni: string): Promise<Elector> => {
    return apiFetch<Elector>(`/electores/${dni}`);
  },
};

// Mesa de Votación API
export const mesaApi = {
  getById: async (id: number): Promise<Mesa> => {
    return apiFetch<Mesa>(`/mesas/${id}`);
  },
};

// Candidatos API
export const candidatosApi = {
  getByTipo: async (tipoId: number): Promise<Candidato[]> => {
    return apiFetch<Candidato[]>(`/candidatos/tipo/${tipoId}`);
  },

  getAll: async (): Promise<Candidato[]> => {
    return apiFetch<Candidato[]>('/candidatos');
  },
};

// Votos API
export const votosApi = {
  registrar: async (voto: VotoRequest): Promise<VotoResponse> => {
    return apiFetch<VotoResponse>('/votos', {
      method: 'POST',
      body: JSON.stringify(voto),
    });
  },
};

// Resultados API
export const resultadosApi = {
  getByMesa: async (mesaId: number): Promise<ResultadosMesa> => {
    return apiFetch<ResultadosMesa>(`/resultados-mesa/${mesaId}`);
  },
};

// Incidencias API
export const incidenciasApi = {
  getTipos: async (): Promise<TipoIncidencia[]> => {
    return apiFetch<TipoIncidencia[]>('/incidencias/tipo');
  },

  registrar: async (incidencia: IncidenciaRequest): Promise<IncidenciaResponse> => {
    return apiFetch<IncidenciaResponse>('/incidencias', {
      method: 'POST',
      body: JSON.stringify(incidencia),
    });
  },
};

// Locales API
export const localesApi = {
  getAll: async (): Promise<LocalVotacion[]> => {
    return apiFetch<LocalVotacion[]>('/locales');
  },

  getById: async (id: number): Promise<LocalVotacion> => {
    return apiFetch<LocalVotacion>(`/locales/${id}`);
  },
};

// Tipo Elección API
export const tipoEleccionApi = {
  getAll: async (): Promise<TipoEleccion[]> => {
    return apiFetch<TipoEleccion[]>('/tipo-eleccion');
  },
};

// Partidos API
export const partidosApi = {
  getAll: async (): Promise<PartidoPolitico[]> => {
    return apiFetch<PartidoPolitico[]>('/partidos');
  },
};

// Sync API (Offline support)
export const syncApi = {
  syncOfflineData: async (data: SyncData): Promise<{ mensaje: string }> => {
    return apiFetch<{ mensaje: string }>('/sync/offline', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// User API
export const userApi = {
  getById: async (id: number): Promise<User> => {
    return apiFetch<User>(`/usuarios/${id}`);
  },
};
