# ElectoPerú - Guía de Instalación y Desarrollo

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js 18+ instalado
- npm o yarn
- Git

### Instalación en 3 pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/Milenka-95/electoperu-frontend.git
cd electoperu-frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🧪 Probar la API

Una vez que el servidor esté corriendo, puedes probar los endpoints:

### Ejemplos con curl

```bash
# 1. Obtener el calendario electoral
curl http://localhost:3000/api/cronograma?per_page=5 | jq

# 2. Listar partidos políticos
curl http://localhost:3000/api/partidos | jq

# 3. Buscar candidatos presidenciales
curl "http://localhost:3000/api/candidatos?cargo=presidente" | jq

# 4. Encontrar centros de votación cercanos
curl "http://localhost:3000/api/centros?lat=-12.0887&lng=-77.0355&radius=3" | jq

# 5. Información para miembros de mesa
curl "http://localhost:3000/api/miembros-mesa?tipo=instalacion" | jq

# 6. Crear un reporte
curl -X POST http://localhost:3000/api/report \
  -H "Content-Type: application/json" \
  -d '{
    "tipo": "consulta",
    "titulo": "Horario de votación",
    "descripcion": "¿Hasta qué hora puedo votar?",
    "email_contacto": "ciudadano@email.com"
  }' | jq
```

### Ejemplos con navegador

Visita directamente en tu navegador:

- http://localhost:3000/api/cronograma
- http://localhost:3000/api/partidos
- http://localhost:3000/api/candidatos
- http://localhost:3000/api/centros
- http://localhost:3000/api/miembros-mesa

## 📱 Probar como PWA

### En dispositivo móvil

1. Abre la aplicación en tu navegador móvil
2. En el menú del navegador, busca "Instalar" o "Agregar a pantalla de inicio"
3. Sigue las instrucciones para instalar la PWA
4. La aplicación aparecerá como una app nativa en tu dispositivo

### En Chrome Desktop

1. Abre la aplicación en Chrome
2. En la barra de direcciones, haz clic en el ícono de instalación (⊕)
3. Confirma la instalación
4. La PWA se abrirá en una ventana independiente

### Modo Offline

1. Abre la aplicación y navega por algunas páginas
2. Abre las DevTools (F12)
3. Ve a la pestaña "Network"
4. Marca la casilla "Offline"
5. Recarga la página - verás que sigue funcionando con los datos en caché

## 🏗️ Build para Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 🐳 Docker (Opcional)

Si prefieres usar Docker:

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Construir imagen
docker build -t electoperu .

# Ejecutar contenedor
docker run -p 3000:3000 electoperu
```

## 🔧 Configuración del Entorno

### Variables de Entorno (Opcional)

Crea un archivo `.env.local` para configuración:

```env
# Puerto del servidor (opcional, default: 3000)
PORT=3000

# Para integración futura con APIs oficiales
NEXT_PUBLIC_ONPE_API_URL=https://api.onpe.gob.pe
NEXT_PUBLIC_JNE_API_URL=https://api.jne.gob.pe
NEXT_PUBLIC_RENIEC_API_URL=https://api.reniec.gob.pe

# API Keys (cuando sean necesarias)
NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_aqui
NEXT_PUBLIC_GOOGLE_MAPS_KEY=tu_key_aqui
```

## 🧪 Testing

### Tests manuales de API

Archivo de pruebas `test-api.sh`:

```bash
#!/bin/bash

API_BASE="http://localhost:3000/api"

echo "Testing ElectoPerú API..."

echo "\n1. Cronograma:"
curl -s "$API_BASE/cronograma?per_page=2" | jq '.metadata'

echo "\n2. Partidos:"
curl -s "$API_BASE/partidos?per_page=2" | jq '.data[].nombre'

echo "\n3. Candidatos:"
curl -s "$API_BASE/candidatos?cargo=presidente" | jq '.data[].nombre'

echo "\n4. Centros:"
curl -s "$API_BASE/centros?distrito=lince" | jq '.data[].nombre'

echo "\n5. Miembros Mesa:"
curl -s "$API_BASE/miembros-mesa" | jq '.data[] | .titulo'

echo "\n✅ All tests completed!"
```

## 🎨 Personalización

### Cambiar colores del tema

Edita `app/globals.css`:

```css
:root {
  --primary-color: #D91F26;  /* Rojo electoral */
  --secondary-color: #1F2937; /* Gris oscuro */
}
```

### Modificar datos

Los datos mock están en la carpeta `data/`:
- `data/partidos.ts` - Partidos políticos
- `data/candidatos.ts` - Candidatos
- `data/cronograma.ts` - Calendario electoral
- `data/centros-votacion.ts` - Centros de votación
- `data/miembros-mesa.ts` - Información para miembros de mesa

## 📊 Monitoreo y Logs

### Ver logs del servidor

```bash
# En desarrollo
npm run dev

# Los logs aparecerán en la consola
```

### Logs de producción

```bash
# Con PM2 (recomendado para producción)
npm install -g pm2
pm2 start npm --name "electoperu" -- start
pm2 logs electoperu
pm2 monit
```

## 🔒 Seguridad

### Checklist de seguridad para producción

- [ ] Configurar HTTPS
- [ ] Habilitar CORS apropiadamente
- [ ] Validar todas las entradas de usuario
- [ ] Implementar rate limiting
- [ ] Agregar autenticación para endpoints administrativos
- [ ] Revisar dependencias con `npm audit`
- [ ] Implementar CSP (Content Security Policy)
- [ ] Configurar headers de seguridad

```bash
# Revisar vulnerabilidades
npm audit

# Corregir automáticamente
npm audit fix
```

## 🚀 Despliegue

### Vercel (Recomendado - Zero Config)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Producción
vercel --prod
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Servidor VPS (Ubuntu)

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clonar y configurar
git clone https://github.com/Milenka-95/electoperu-frontend.git
cd electoperu-frontend
npm install
npm run build

# Usar PM2 para mantener el proceso corriendo
sudo npm install -g pm2
pm2 start npm --name "electoperu" -- start
pm2 startup
pm2 save
```

## 🐛 Troubleshooting

### Problema: Puerto 3000 ya en uso

```bash
# Encontrar proceso
lsof -i :3000

# Matar proceso
kill -9 <PID>

# O usar otro puerto
PORT=3001 npm run dev
```

### Problema: Error de dependencias

```bash
# Limpiar caché
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Problema: Build falla

```bash
# Verificar versión de Node
node --version  # Debe ser 18+

# Limpiar .next
rm -rf .next
npm run build
```

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## 💡 Tips de Desarrollo

1. **Hot Reload**: Los cambios en desarrollo se reflejan automáticamente
2. **DevTools**: Usa React DevTools para debugging
3. **TypeScript**: El IDE mostrará errores de tipo en tiempo real
4. **API Testing**: Usa Postman o Thunder Client para probar endpoints
5. **Git Hooks**: Considera agregar husky para validar código antes de commit

## 🤝 Soporte

¿Necesitas ayuda?
- 📧 Email: soporte@electoperu.pe
- 💬 Issues: [GitHub Issues](https://github.com/Milenka-95/electoperu-frontend/issues)
- 📖 Docs: Ver [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

---

¡Feliz codificación! 🚀🇵🇪
