# ElectoPerú - Sistema de Información Electoral

Sistema de información electoral para ciudadanos peruanos - Elecciones Generales 2026

## 🗳️ Descripción

ElectoPerú es una **Progressive Web App (PWA)** desarrollada con Next.js que proporciona información completa sobre el proceso electoral peruano, incluyendo:

- 📅 **Calendario Electoral**: Fechas importantes del proceso electoral
- 🗳️ **Partidos Políticos**: Información detallada sobre agrupaciones políticas y sus propuestas
- 👥 **Candidatos**: Perfiles, hojas de vida, propuestas y noticias
- 📍 **Centros de Votación**: Búsqueda con geolocalización
- 📋 **Miembros de Mesa**: Guías e instrucciones paso a paso
- 📱 **Modo Offline**: Funciona sin conexión a internet
- 💬 **Reportes Ciudadanos**: Sistema de fiscalización ciudadana

## 🚀 Tecnologías

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **PWA**: Service Worker + Manifest
- **API**: REST API con Next.js Route Handlers

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm o yarn

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Milenka-95/electoperu-frontend.git
cd electoperu-frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en puerto 3000

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 📡 API Endpoints

### Calendario Electoral
```bash
GET /api/cronograma
  ?page=1
  &per_page=10
  &tipo=eleccion
  &aplica_a=ciudadanos
  &desde=2026-01-01
  &hasta=2026-12-31
```

### Partidos Políticos
```bash
GET /api/partidos
  ?page=1
  &per_page=10
  &q=alianza

GET /api/partidos/[id]
```

### Candidatos
```bash
GET /api/candidatos
  ?page=1
  &per_page=10
  &q=cesar
  &cargo=presidente
  &partido_id=1
```

### Centros de Votación
```bash
GET /api/centros
  ?page=1
  &per_page=10
  &q=ricardo+palma
  &lat=-12.0887
  &lng=-77.0355
  &radius=5
  &distrito=lince
  &mesa=001234
```

### Miembros de Mesa
```bash
GET /api/miembros-mesa
  ?tipo=instalacion
```

### Reportes Ciudadanos
```bash
POST /api/report
Content-Type: application/json

{
  "tipo": "irregularidad",
  "titulo": "Título del reporte",
  "descripcion": "Descripción detallada",
  "ubicacion": { "lat": -12.0887, "lng": -77.0355 },
  "email_contacto": "email@example.com"
}

GET /api/report
  ?tipo=irregularidad
  &estado=pendiente
```

## 📖 Documentación Completa

Ver [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) para documentación detallada de todos los endpoints, ejemplos de uso, y guías de integración.

## 🎨 Características

### Progressive Web App (PWA)
- ✅ Instalable en dispositivos móviles y escritorio
- ✅ Funciona offline con Service Worker
- ✅ Caché inteligente de datos críticos
- ✅ Actualizaciones en segundo plano

### API Backend Completa
- ✅ 7 endpoints RESTful
- ✅ Paginación en todas las listas
- ✅ Filtros y búsqueda avanzada
- ✅ Geolocalización para centros de votación
- ✅ Validación de datos
- ✅ Manejo de errores robusto

### Datos Incluidos
- ✅ 5 partidos políticos con propuestas detalladas
- ✅ 8 candidatos (presidenciales, diputados, senadores)
- ✅ 15 eventos del calendario electoral
- ✅ 6 centros de votación con ubicaciones
- ✅ 5 guías completas para miembros de mesa

## 🏛️ Fuentes Oficiales

Los datos deben integrarse con:

- **ONPE** (Oficina Nacional de Procesos Electorales): https://www.onpe.gob.pe
- **JNE** (Jurado Nacional de Elecciones): https://portal.jne.gob.pe
- **RENIEC** (Registro Nacional de Identificación): https://www.reniec.gob.pe
- **El Comercio**: Cobertura periodística

## 📂 Estructura del Proyecto

```
electoperu-frontend/
├── app/
│   ├── api/              # API Routes
│   │   ├── candidatos/
│   │   ├── centros/
│   │   ├── cronograma/
│   │   ├── miembros-mesa/
│   │   ├── partidos/
│   │   └── report/
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página de inicio
├── data/                 # Mock data
│   ├── candidatos.ts
│   ├── centros-votacion.ts
│   ├── cronograma.ts
│   ├── miembros-mesa.ts
│   ├── partidos.ts
│   └── reportes/
├── types/                # TypeScript types
│   └── index.ts
├── public/               # Archivos estáticos
│   ├── manifest.json     # PWA Manifest
│   ├── service-worker.js # Service Worker
│   └── offline.html      # Página offline
└── API_DOCUMENTATION.md  # Documentación API
```

## 🧪 Pruebas de API

Ejemplos de prueba con curl:

```bash
# Obtener calendario electoral
curl http://localhost:3000/api/cronograma?per_page=5

# Buscar partidos
curl http://localhost:3000/api/partidos?q=accion

# Buscar candidatos presidenciales
curl http://localhost:3000/api/candidatos?cargo=presidente

# Centros cerca de una ubicación
curl "http://localhost:3000/api/centros?lat=-12.0887&lng=-77.0355&radius=3"

# Información para miembros de mesa
curl http://localhost:3000/api/miembros-mesa?tipo=instalacion

# Crear un reporte
curl -X POST http://localhost:3000/api/report \
  -H "Content-Type: application/json" \
  -d '{"tipo":"consulta","titulo":"Test","descripcion":"Test description"}'
```

## 🔒 Seguridad

- Validación de entrada en todos los endpoints
- Sanitización de datos
- Manejo seguro de errores
- CORS configurado apropiadamente
- Sin exposición de datos sensibles

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Otros servicios
- Compatible con cualquier hosting que soporte Node.js
- Compatible con Docker
- Compatible con servicios serverless

## 📝 Roadmap

- [ ] Integración con APIs oficiales (ONPE, JNE, RENIEC)
- [ ] Sistema de autenticación
- [ ] Dashboard administrativo
- [ ] Notificaciones push
- [ ] Chat bot
- [ ] Modo oscuro
- [ ] Multiidioma (Quechua, Aymara)
- [ ] Tests automatizados
- [ ] CI/CD Pipeline

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Milenka-95** - Desarrollo inicial - [GitHub](https://github.com/Milenka-95)

## 🙏 Agradecimientos

- ONPE - Oficina Nacional de Procesos Electorales
- JNE - Jurado Nacional de Elecciones
- RENIEC - Registro Nacional de Identificación y Estado Civil
- El Comercio - Cobertura periodística

## 📞 Soporte

Para reportar problemas o solicitar nuevas funcionalidades:
- Issues: [GitHub Issues](https://github.com/Milenka-95/electoperu-frontend/issues)

---

**Elecciones Generales 2026 - República del Perú** 🇵🇪
