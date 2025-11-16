# ElectoPeru Frontend - Sistema Electoral 2026

Sistema de información electoral para los procesos electorales del 2026 en Perú. Aplicativo web que brinda a los ciudadanos información utilitaria referida a los procesos electorales.

## 🎯 Propósito

Generar un sistema que permita a los ciudadanos:
- Estar al día con respecto a las opciones políticas
- Acceder a información sobre procesos electorales
- Gestionar el proceso de votación (para operadores y miembros de mesa)
- Consultar resultados en tiempo real

## 🚀 Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS 4
- **React**: 19.2.0

## 📋 Módulos Implementados

### 1. Autenticación (Login + Roles)
- **Ruta**: `/login`
- **Descripción**: Sistema de inicio de sesión con soporte para múltiples roles
- **Roles**: ADMIN, OPERADOR, MIEMBRO_MESA, CIUDADANO
- **Funcionalidad**: Almacenamiento de token JWT y redirección basada en rol

### 2. Electores (Consulta de DNI)
- **Ruta**: `/electores/buscar`
- **Descripción**: Búsqueda de electores por DNI
- **Funcionalidad**: 
  - Verificación de identidad
  - Estado de votación
  - Información de mesa asignada
  - Registro de voto

### 3. Mesa de Votación
- **Ruta**: `/mesa/panel`
- **Descripción**: Panel de control para miembros de mesa
- **Funcionalidad**:
  - Información de la mesa asignada
  - Lista de miembros
  - Control de electores
  - Acceso rápido a funciones

### 4. Votación
- **Ruta**: `/votacion`
- **Descripción**: Interfaz de selección de candidatos
- **Funcionalidad**:
  - Selección por tipo de elección
  - Visualización de candidatos con fotos
  - Confirmación de voto
  - Registro en el sistema

### 5. Resultados
- **Ruta**: `/resultados`
- **Descripción**: Visualización de resultados por mesa
- **Funcionalidad**:
  - Gráficos de resultados
  - Porcentajes y conteos
  - Actualización en tiempo real

### 6. Incidencias
- **Ruta**: `/incidencias`
- **Descripción**: Sistema de reporte de problemas
- **Funcionalidad**:
  - Tipos de incidencias
  - Descripción detallada
  - Registro automático de usuario y mesa

### 7. Locales de Votación
- **Ruta**: `/locales`
- **Descripción**: Listado de centros de votación
- **Funcionalidad**:
  - Búsqueda de locales
  - Información de ubicación
  - Cantidad de mesas y votantes

### 8. Calendario Electoral
- **Ruta**: `/calendario`
- **Descripción**: Fechas importantes del proceso electoral
- **Contenido**:
  - Fechas de elecciones
  - Cronograma del proceso
  - Calendario para miembros de mesa

### 9. Agrupaciones Políticas
- **Ruta**: `/agrupaciones`
- **Descripción**: Información sobre partidos y candidatos
- **Contenido**:
  - Planchas presidenciales
  - Planes de gobierno
  - Candidatos al congreso
  - Hojas de vida

### 10. Administración
- **Ruta**: `/admin`
- **Descripción**: Panel administrativo (solo ADMIN)
- **Funcionalidad**:
  - Gestión de candidatos
  - Gestión de partidos
  - Gestión de locales y mesas
  - Configuración del sistema

### 11. Perfil de Usuario
- **Ruta**: `/perfil`
- **Descripción**: Información del usuario autenticado
- **Funcionalidad**:
  - Datos personales
  - Mesa asignada
  - Accesos rápidos según rol

## 🎨 Diseño

### Paleta de Colores
- **Fondo**: Blanco (#ffffff)
- **Primario**: Azul (#1e40af)
- **Acento**: Rojo (#dc2626) - usado con moderación
- **Texto**: Gris oscuro (#1e293b)

### Componentes Reutilizables
- `Button`: Botones con variantes (primary, secondary, danger)
- `Card`: Contenedor con sombra y bordes redondeados
- `Input`: Campos de entrada con etiquetas y validación
- `Header`: Barra de navegación principal
- `Loading`: Indicador de carga

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Milenka-95/electoperu-frontend.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con la URL de tu backend

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Configuración del Backend

El frontend espera que el backend esté disponible en la URL especificada en `NEXT_PUBLIC_API_URL`.

### Endpoints Esperados

```
POST   /api/auth/login
GET    /api/electores/{dni}
GET    /api/mesas/{id}
GET    /api/candidatos/tipo/{id}
GET    /api/tipo-eleccion
POST   /api/votos
GET    /api/resultados-mesa/{mesaId}
GET    /api/incidencias/tipo
POST   /api/incidencias
GET    /api/locales
GET    /api/locales/{id}
GET    /api/partidos
GET    /api/usuarios/{id}
POST   /api/sync/offline
```

## 📱 Funcionalidades Adicionales

### Sincronización Offline
El sistema incluye soporte para operación sin conexión:
- Almacenamiento local de datos críticos
- Cola de operaciones pendientes
- Sincronización automática al recuperar conexión

### Seguridad
- Autenticación JWT
- Validación de roles
- Protección de rutas
- Tokens almacenados en localStorage

## 🚀 Despliegue

El proyecto está listo para ser desplegado en:
- Vercel (recomendado para Next.js)
- Netlify
- Servidor Node.js

```bash
# Build de producción
npm run build

# El output estará en .next/
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run start    # Ejecutar build de producción
npm run lint     # Ejecutar linter
```

## 🤝 Contribución

Este es un proyecto educativo/hackathon. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 📧 Contacto

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**ElectoPeru 2026** - Sistema de Información Electoral
