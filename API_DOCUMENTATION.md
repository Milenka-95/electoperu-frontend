# ElectoPerú - Backend API Documentation

## Descripción General

ElectoPerú es un sistema de información electoral para ciudadanos peruanos que proporciona acceso a:
- Calendario electoral con fechas clave
- Información sobre partidos políticos y candidatos
- Ubicación de centros y mesas de votación
- Instrucciones para miembros de mesa
- Sistema de reportes ciudadanos

## Tecnologías

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **PWA**: Service Worker + Manifest.json para soporte offline
- **Estilos**: Tailwind CSS

## Estructura del Proyecto

```
electoperu-frontend/
├── app/
│   ├── api/
│   │   ├── candidatos/       # API de candidatos
│   │   ├── centros/          # API de centros de votación
│   │   ├── cronograma/       # API del calendario electoral
│   │   ├── miembros-mesa/    # API para miembros de mesa
│   │   ├── partidos/         # API de partidos políticos
│   │   │   └── [id]/        # Detalles de un partido específico
│   │   └── report/          # API de reportes ciudadanos
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── data/                    # Datos mock del sistema
│   ├── candidatos.ts
│   ├── centros-votacion.ts
│   ├── cronograma.ts
│   ├── miembros-mesa.ts
│   ├── partidos.ts
│   └── reportes/
│       └── reportes.json
├── types/
│   └── index.ts            # Definiciones de tipos TypeScript
└── public/
    ├── manifest.json        # Manifest PWA
    ├── service-worker.js    # Service Worker para offline
    └── offline.html         # Página offline
```

## Endpoints de la API

### 1. Calendario Electoral

**GET** `/api/cronograma`

Obtiene el cronograma electoral con fechas importantes.

**Parámetros de consulta:**
- `page` (number): Número de página (default: 1)
- `per_page` (number): Resultados por página (default: 10)
- `tipo` (string): Filtrar por tipo de evento (`eleccion`, `miembros_mesa`, `inscripcion`, `sorteo`, `capacitacion`, `otro`)
- `aplica_a` (string): Filtrar por aplicabilidad (`ciudadanos`, `miembros_mesa`, `candidatos`, `todos`)
- `desde` (string): Fecha desde (ISO 8601)
- `hasta` (string): Fecha hasta (ISO 8601)

**Ejemplo de respuesta:**
```json
{
  "data": [
    {
      "id": "9",
      "tipo": "eleccion",
      "fecha": "2026-04-05T08:00:00Z",
      "fecha_fin": "2026-04-05T16:00:00Z",
      "titulo": "Elecciones Generales 2026 - Primera Vuelta",
      "descripcion": "Día de votación para elegir Presidente, Vicepresidentes...",
      "obligatorio": true,
      "fuente": "ONPE",
      "url_oficial": "https://www.onpe.gob.pe/elecciones2026",
      "aplica_a": "todos"
    }
  ],
  "success": true,
  "metadata": {
    "total": 15,
    "page": 1,
    "per_page": 10,
    "total_pages": 2,
    "ultima_actualizacion": "2025-11-16T21:00:00.000Z"
  }
}
```

### 2. Partidos Políticos

**GET** `/api/partidos`

Lista todos los partidos políticos registrados.

**Parámetros de consulta:**
- `page` (number): Número de página
- `per_page` (number): Resultados por página
- `q` (string): Búsqueda por nombre, sigla o descripción

**Ejemplo de respuesta:**
```json
{
  "data": [
    {
      "id": "1",
      "nombre": "Alianza para el Progreso",
      "sigla": "APP",
      "logo_url": "/logos/app.png",
      "plan_gobierno_url": "/planes/app_plan_gobierno_2026.pdf",
      "propuestas_por_sector": {
        "economia": ["Reactivación económica...", "..."],
        "educacion": ["Incremento del presupuesto...", "..."]
      },
      "fundacion": "2001",
      "descripcion": "Partido político peruano..."
    }
  ],
  "success": true,
  "metadata": { ... }
}
```

**GET** `/api/partidos/[id]`

Obtiene detalles completos de un partido específico, incluyendo sus candidatos.

**Ejemplo de respuesta:**
```json
{
  "data": {
    "id": "1",
    "nombre": "Alianza para el Progreso",
    "sigla": "APP",
    "propuestas_por_sector": { ... },
    "candidatos": [
      {
        "id": "1",
        "nombre": "César Acuña Peralta",
        "cargo": "presidente",
        "propuestas": { ... },
        "actividades": [ ... ],
        "noticias": [ ... ]
      }
    ]
  },
  "success": true,
  "metadata": { ... }
}
```

### 3. Candidatos

**GET** `/api/candidatos`

Búsqueda y listado de candidatos.

**Parámetros de consulta:**
- `page` (number): Número de página
- `per_page` (number): Resultados por página
- `q` (string): Búsqueda por nombre
- `cargo` (string): Filtrar por cargo (`presidente`, `vicepresidente`, `diputado`, `senador`, `parlamento_andino`)
- `partido_id` (string): Filtrar por partido

**Ejemplo de respuesta:**
```json
{
  "data": [
    {
      "id": "1",
      "nombre": "César Acuña Peralta",
      "partido_id": "1",
      "cargo": "presidente",
      "foto_url": "/candidatos/cesar_acuna.jpg",
      "hoja_vida_url": "/hojas_vida/cesar_acuna_hv.pdf",
      "propuestas": {
        "economia": ["...", "..."],
        "educacion": ["...", "..."]
      },
      "actividades": [ ... ],
      "noticias": [ ... ]
    }
  ],
  "success": true,
  "metadata": { ... }
}
```

### 4. Centros de Votación

**GET** `/api/centros`

Búsqueda de centros de votación con soporte de geolocalización.

**Parámetros de consulta:**
- `page` (number): Número de página
- `per_page` (number): Resultados por página
- `q` (string): Búsqueda por nombre, dirección o distrito
- `lat` (number): Latitud para búsqueda por ubicación
- `lng` (number): Longitud para búsqueda por ubicación
- `radius` (number): Radio de búsqueda en km (default: 5)
- `distrito` (string): Filtrar por distrito
- `mesa` (string): Filtrar por número de mesa

**Ejemplo de respuesta:**
```json
{
  "data": [
    {
      "id": "1",
      "nombre": "I.E. Ricardo Palma",
      "direccion": "Av. Arequipa 2350",
      "distrito": "Lince",
      "provincia": "Lima",
      "departamento": "Lima",
      "coords": {
        "lat": -12.0887,
        "lng": -77.0355
      },
      "mesas": [
        {
          "mesa_id": "001234",
          "numero": "001234",
          "ubicacion_dentro_local": "Pabellón A - Aula 101",
          "accesibilidad_info": "Primer piso, acceso para sillas de ruedas disponible"
        }
      ],
      "accesibilidad": "Rampas de acceso...",
      "referencia": "A dos cuadras del Parque...",
      "distancia": 1.2
    }
  ],
  "success": true,
  "metadata": { ... }
}
```

### 5. Información para Miembros de Mesa

**GET** `/api/miembros-mesa`

Obtiene instrucciones y guías para miembros de mesa.

**Parámetros de consulta:**
- `tipo` (string): Filtrar por tipo (`general`, `instalacion`, `sufragio`, `escrutinio`, `clausura`)

**Ejemplo de respuesta:**
```json
{
  "data": [
    {
      "id": "2",
      "tipo": "instalacion",
      "titulo": "Instalación de la Mesa de Sufragio",
      "descripcion": "Procedimiento para la correcta instalación...",
      "pasos": [
        {
          "numero": 1,
          "titulo": "Presentación temprana",
          "descripcion": "Llegar al local de votación antes de las 7:00 AM...",
          "importante": true
        }
      ],
      "documentos_pdf": ["/documentos/acta_instalacion.pdf"],
      "orden": 2
    }
  ],
  "success": true,
  "metadata": { ... }
}
```

### 6. Reportes Ciudadanos

**POST** `/api/report`

Crea un nuevo reporte ciudadano.

**Body de la solicitud:**
```json
{
  "tipo": "irregularidad",
  "titulo": "Problema en centro de votación",
  "descripcion": "Descripción detallada del problema...",
  "ubicacion": {
    "lat": -12.0887,
    "lng": -77.0355
  },
  "centro_votacion_id": "1",
  "email_contacto": "ciudadano@email.com"
}
```

**Campos requeridos:**
- `tipo`: `irregularidad`, `sugerencia`, `consulta`, o `novedad`
- `titulo`: Título del reporte
- `descripcion`: Descripción detallada

**Campos opcionales:**
- `ubicacion`: Coordenadas geográficas
- `centro_votacion_id`: ID del centro relacionado
- `email_contacto`: Email para seguimiento

**Respuesta:**
```json
{
  "data": {
    "id": "rep_1234567890_abc123",
    "tipo": "irregularidad",
    "titulo": "Problema en centro de votación",
    "descripcion": "Descripción detallada...",
    "ubicacion": { ... },
    "fecha_creacion": "2025-11-16T21:00:00.000Z",
    "estado": "pendiente",
    "email_contacto": "ciudadano@email.com"
  },
  "success": true,
  "message": "Reporte creado exitosamente"
}
```

**GET** `/api/report`

Lista reportes existentes (para administración).

**Parámetros de consulta:**
- `tipo` (string): Filtrar por tipo
- `estado` (string): Filtrar por estado (`pendiente`, `revisado`, `resuelto`)

## Funcionalidades PWA

### Service Worker

El Service Worker implementa las siguientes estrategias de caché:

1. **API Calls**: Network First con fallback a caché
2. **Recursos estáticos**: Cache First con fallback a red
3. **Páginas HTML**: Cache con página offline como fallback

### Instalación PWA

Los usuarios pueden instalar la aplicación como PWA en:
- Dispositivos móviles (Android/iOS)
- Escritorio (Chrome, Edge, etc.)

### Funcionalidad Offline

El sistema almacena en caché:
- Calendario electoral
- Información de candidatos guardada
- Ubicación de votación del usuario
- Instrucciones para miembros de mesa

## Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Milenka-95/electoperu-frontend.git
cd electoperu-frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Configuración

### Variables de Entorno

Actualmente no se requieren variables de entorno. Para integración futura con APIs externas:

```env
# Ejemplo para futuras integraciones
NEXT_PUBLIC_ONPE_API_URL=https://api.onpe.gob.pe
NEXT_PUBLIC_JNE_API_URL=https://api.jne.gob.pe
NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_aquí
```

## Fuentes de Datos

Los datos actuales son mock data para demostración. Para producción, se deben integrar:

- **ONPE**: Oficina Nacional de Procesos Electorales
  - Cronograma electoral
  - Centros de votación
  - Resultados electorales

- **JNE**: Jurado Nacional de Elecciones
  - Partidos políticos inscritos
  - Candidatos habilitados
  - Planes de gobierno

- **RENIEC**: Registro Nacional de Identificación y Estado Civil
  - Padrón electoral
  - Verificación de identidad

- **El Comercio**: Cobertura periodística
  - Noticias sobre candidatos
  - Análisis político
  - Propuestas y debates

## Seguridad y Consideraciones Legales

1. **Fuentes oficiales**: Todos los datos muestran su fuente y fecha de actualización
2. **Datos personales**: Se evita almacenar DNI u otros datos sensibles innecesariamente
3. **Información verificada**: Se distingue claramente entre información oficial y cobertura mediática
4. **HTTPS**: Se debe usar HTTPS en producción para proteger datos
5. **Validación**: Todos los endpoints validan y sanitizan entradas

## Roadmap

### Próximas Funcionalidades

- [ ] Integración con APIs oficiales (ONPE, JNE, RENIEC)
- [ ] Sistema de autenticación para usuarios
- [ ] Dashboard administrativo para gestión de contenido
- [ ] Notificaciones push para eventos importantes
- [ ] Chat bot para consultas frecuentes
- [ ] Modo oscuro
- [ ] Soporte multiidioma (Quechua, Aymara)
- [ ] Accesibilidad mejorada (WCAG 2.1)
- [ ] Analytics y métricas de uso

## Soporte

Para reportar problemas o solicitar nuevas funcionalidades:
- GitHub Issues: [https://github.com/Milenka-95/electoperu-frontend/issues](https://github.com/Milenka-95/electoperu-frontend/issues)

## Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Autores

- Milenka-95 - Desarrollo inicial

## Agradecimientos

- ONPE - Oficina Nacional de Procesos Electorales
- JNE - Jurado Nacional de Elecciones
- RENIEC - Registro Nacional de Identificación y Estado Civil
- El Comercio - Cobertura periodística
