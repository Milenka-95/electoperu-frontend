# ElectoPerú API - Quick Reference & Examples

## Base URL
```
http://localhost:3000/api  (Development)
https://your-domain.com/api (Production)
```

## Authentication
No authentication required for read endpoints (GET).
POST endpoints are open for citizen participation.

---

## 📅 Electoral Calendar

### Get All Events
```bash
curl http://localhost:3000/api/cronograma
```

### Get Upcoming Events (with pagination)
```bash
curl "http://localhost:3000/api/cronograma?page=1&per_page=5"
```

### Filter by Event Type
```bash
# Get only election dates
curl "http://localhost:3000/api/cronograma?tipo=eleccion"

# Get poll worker dates
curl "http://localhost:3000/api/cronograma?tipo=miembros_mesa"
```

### Filter by Date Range
```bash
curl "http://localhost:3000/api/cronograma?desde=2026-04-01&hasta=2026-05-31"
```

### Filter by Applicability
```bash
# Events for citizens
curl "http://localhost:3000/api/cronograma?aplica_a=ciudadanos"

# Events for poll workers
curl "http://localhost:3000/api/cronograma?aplica_a=miembros_mesa"
```

**Response Example:**
```json
{
  "data": [
    {
      "id": "9",
      "tipo": "eleccion",
      "fecha": "2026-04-05T08:00:00Z",
      "fecha_fin": "2026-04-05T16:00:00Z",
      "titulo": "Elecciones Generales 2026 - Primera Vuelta",
      "descripcion": "Día de votación para elegir Presidente...",
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

---

## 🗳️ Political Parties

### List All Parties
```bash
curl http://localhost:3000/api/partidos
```

### Search Parties
```bash
# Search by name or acronym
curl "http://localhost:3000/api/partidos?q=accion"
```

### Get Party Details
```bash
# Get party with ID 1 (includes candidates)
curl http://localhost:3000/api/partidos/1
```

**Response Example (Party Details):**
```json
{
  "data": {
    "id": "1",
    "nombre": "Alianza para el Progreso",
    "sigla": "APP",
    "logo_url": "/logos/app.png",
    "plan_gobierno_url": "/planes/app_plan_gobierno_2026.pdf",
    "propuestas_por_sector": {
      "economia": [
        "Reactivación económica post-pandemia",
        "Incentivos fiscales para MYPES"
      ],
      "educacion": [
        "Incremento del presupuesto educativo al 6% del PBI",
        "Mejora de infraestructura educativa"
      ]
    },
    "candidatos": [
      {
        "id": "1",
        "nombre": "César Acuña Peralta",
        "cargo": "presidente",
        "propuestas": {...}
      }
    ]
  },
  "success": true
}
```

---

## 👥 Candidates

### List All Candidates
```bash
curl http://localhost:3000/api/candidatos
```

### Search by Name
```bash
curl "http://localhost:3000/api/candidatos?q=cesar"
```

### Filter by Position
```bash
# Presidential candidates
curl "http://localhost:3000/api/candidatos?cargo=presidente"

# Deputies
curl "http://localhost:3000/api/candidatos?cargo=diputado"

# Senators
curl "http://localhost:3000/api/candidatos?cargo=senador"

# Andean Parliament
curl "http://localhost:3000/api/candidatos?cargo=parlamento_andino"
```

### Filter by Party
```bash
curl "http://localhost:3000/api/candidatos?partido_id=1"
```

### Combined Filters
```bash
curl "http://localhost:3000/api/candidatos?cargo=presidente&partido_id=1"
```

**Response Example:**
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
        "economia": ["Crear 2 millones de empleos formales"],
        "educacion": ["Presupuesto educativo de 6% del PBI"]
      },
      "actividades": [
        {
          "id": "a1",
          "fecha": "2025-11-10T00:00:00Z",
          "tipo": "evento",
          "titulo": "Lanzamiento de candidatura"
        }
      ],
      "noticias": [...]
    }
  ],
  "success": true,
  "metadata": {...}
}
```

---

## 📍 Voting Centers

### List All Centers
```bash
curl http://localhost:3000/api/centros
```

### Search by Name or Address
```bash
curl "http://localhost:3000/api/centros?q=ricardo+palma"
```

### Filter by District
```bash
curl "http://localhost:3000/api/centros?distrito=lince"
```

### Find by Polling Station Number
```bash
curl "http://localhost:3000/api/centros?mesa=001234"
```

### Geolocation Search (Find Nearest)
```bash
# Find centers within 5km of coordinates
curl "http://localhost:3000/api/centros?lat=-12.0887&lng=-77.0355&radius=5"

# Find centers within 2km
curl "http://localhost:3000/api/centros?lat=-12.0887&lng=-77.0355&radius=2"
```

**Response Example (with geolocation):**
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
          "accesibilidad_info": "Primer piso, acceso para sillas de ruedas"
        }
      ],
      "accesibilidad": "Rampas de acceso para personas con discapacidad",
      "referencia": "A dos cuadras del Parque Mariscal Castilla",
      "distancia": 0.5
    }
  ],
  "success": true,
  "metadata": {...}
}
```

---

## 📋 Poll Workers Information

### Get All Information
```bash
curl http://localhost:3000/api/miembros-mesa
```

### Filter by Type
```bash
# General information
curl "http://localhost:3000/api/miembros-mesa?tipo=general"

# Installation procedures
curl "http://localhost:3000/api/miembros-mesa?tipo=instalacion"

# Voting procedures
curl "http://localhost:3000/api/miembros-mesa?tipo=sufragio"

# Vote counting procedures
curl "http://localhost:3000/api/miembros-mesa?tipo=escrutinio"

# Closing procedures
curl "http://localhost:3000/api/miembros-mesa?tipo=clausura"
```

**Response Example:**
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
        },
        {
          "numero": 2,
          "titulo": "Verificar identidad",
          "descripcion": "Presentar DNI original..."
        }
      ],
      "documentos_pdf": ["/documentos/acta_instalacion.pdf"],
      "orden": 2
    }
  ],
  "success": true,
  "metadata": {...}
}
```

---

## 💬 Citizen Reports

### Submit a Report
```bash
curl -X POST http://localhost:3000/api/report \
  -H "Content-Type: application/json" \
  -d '{
    "tipo": "irregularidad",
    "titulo": "Problema en centro de votación",
    "descripcion": "Las colas son muy largas y no hay suficiente personal",
    "ubicacion": {
      "lat": -12.0887,
      "lng": -77.0355
    },
    "centro_votacion_id": "1",
    "email_contacto": "ciudadano@email.com"
  }'
```

**Report Types:**
- `irregularidad` - Report irregularities or problems
- `sugerencia` - Suggestions for improvement
- `consulta` - Questions or inquiries
- `novedad` - News or updates

**Response:**
```json
{
  "data": {
    "id": "rep_1234567890_abc123",
    "tipo": "irregularidad",
    "titulo": "Problema en centro de votación",
    "descripcion": "Las colas son muy largas...",
    "ubicacion": {
      "lat": -12.0887,
      "lng": -77.0355
    },
    "centro_votacion_id": "1",
    "fecha_creacion": "2025-11-16T21:00:00.000Z",
    "estado": "pendiente",
    "email_contacto": "ciudadano@email.com"
  },
  "success": true,
  "message": "Reporte creado exitosamente"
}
```

### List Reports (Admin)
```bash
# Get all reports
curl http://localhost:3000/api/report

# Filter by type
curl "http://localhost:3000/api/report?tipo=irregularidad"

# Filter by status
curl "http://localhost:3000/api/report?estado=pendiente"
```

---

## 🔄 Common Patterns

### Pagination
All list endpoints support pagination:
```bash
curl "http://localhost:3000/api/candidatos?page=2&per_page=5"
```

### Error Handling
All endpoints return consistent error responses:
```json
{
  "success": false,
  "message": "Error description here",
  "data": null
}
```

### Response Metadata
All successful responses include metadata:
```json
{
  "metadata": {
    "total": 50,
    "page": 1,
    "per_page": 10,
    "total_pages": 5,
    "ultima_actualizacion": "2025-11-16T21:00:00.000Z"
  }
}
```

---

## 🧪 Testing with Different Tools

### cURL
```bash
curl http://localhost:3000/api/cronograma
```

### HTTPie
```bash
http GET localhost:3000/api/cronograma
```

### JavaScript/Fetch
```javascript
fetch('http://localhost:3000/api/cronograma')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Axios
```javascript
import axios from 'axios';

const response = await axios.get('http://localhost:3000/api/cronograma');
console.log(response.data);
```

### Python/Requests
```python
import requests

response = requests.get('http://localhost:3000/api/cronograma')
print(response.json())
```

---

## 📱 Integration Examples

### React Hook
```jsx
import { useState, useEffect } from 'react';

function useCandidatos(cargo) {
  const [candidatos, setCandidatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/candidatos?cargo=${cargo}`)
      .then(res => res.json())
      .then(data => {
        setCandidatos(data.data);
        setLoading(false);
      });
  }, [cargo]);

  return { candidatos, loading };
}
```

### Next.js Server Component
```jsx
async function CandidatosPage() {
  const res = await fetch('http://localhost:3000/api/candidatos', {
    cache: 'no-store'
  });
  const { data } = await res.json();

  return (
    <div>
      {data.map(candidato => (
        <div key={candidato.id}>{candidato.nombre}</div>
      ))}
    </div>
  );
}
```

---

## 🚨 Rate Limiting (Future)

For production, consider implementing rate limiting:
```
100 requests per minute per IP for GET endpoints
10 requests per minute per IP for POST endpoints
```

---

## 📞 Support

Need help?
- 📖 Full docs: [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- 🚀 Setup guide: [INSTALLATION.md](./INSTALLATION.md)
- 💬 Issues: [GitHub Issues](https://github.com/Milenka-95/electoperu-frontend/issues)
