# Guía de Configuración del Proyecto

Esta guía te ayudará a configurar y ejecutar el proyecto completo.

## Requisitos Previos

- Node.js 18+ y npm
- Git

## Pasos de Instalación

### 1. Configurar el Backend

```bash
# Navegar a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Generar el cliente de Prisma
npm run prisma:generate

# Crear la base de datos y ejecutar migraciones
npm run prisma:migrate

# Poblar la base de datos con datos de ejemplo (10 propiedades en Ottawa)
npm run prisma:seed

# Iniciar el servidor en modo desarrollo
npm run start:dev
```

El backend estará disponible en `http://localhost:3000`

**Nota:** La primera vez que ejecutes `prisma:migrate`, se creará la base de datos SQLite en `backend/prisma/dev.db`

### 2. Configurar el Frontend

En una nueva terminal:

```bash
# Navegar a la carpeta del frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

El frontend estará disponible en `http://localhost:4200`

## Verificar que Todo Funciona

1. Abre `http://localhost:4200` en tu navegador
2. Deberías ver el listado de propiedades
3. Puedes aplicar filtros y hacer clic en una propiedad para ver el detalle
4. Prueba el formulario de contacto

## Estructura de Carpetas

```
.
├── backend/              # API NestJS
│   ├── src/
│   │   ├── properties/  # Módulo de propiedades
│   │   ├── leads/       # Módulo de leads
│   │   └── prisma/      # Servicio de Prisma
│   └── prisma/
│       ├── schema.prisma
│       └── seed.ts
│
└── frontend/            # Aplicación Angular
    └── src/
        └── app/
            ├── components/
            ├── pages/
            ├── services/
            └── models/
```

## Comandos Útiles

### Backend

- `npm run start:dev` - Desarrollo con hot-reload
- `npm run build` - Compilar para producción
- `npm run prisma:studio` - Abrir Prisma Studio (GUI para ver/editarlos datos)
- `npm run prisma:seed` - Ejecutar seed nuevamente (limpia y recrea datos)

### Frontend

- `npm start` - Servidor de desarrollo
- `npm run build` - Compilar para producción

## Solución de Problemas

### El backend no inicia

- Verifica que el puerto 3000 no esté en uso
- Asegúrate de haber ejecutado `npm run prisma:generate` y `npm run prisma:migrate`

### El frontend no puede conectar con el backend

- Verifica que el backend esté corriendo en `http://localhost:3000`
- Revisa la consola del navegador para ver errores de CORS
- El backend tiene CORS habilitado para `http://localhost:4200`

### No hay propiedades en el listado

- Ejecuta `npm run prisma:seed` en la carpeta backend
- Verifica que la base de datos existe en `backend/prisma/dev.db`

## Próximos Pasos

Una vez que tengas todo funcionando, puedes:

1. Explorar el código en `backend/src` y `frontend/src/app`
2. Modificar los datos de ejemplo en `backend/prisma/seed.ts`
3. Agregar nuevas funcionalidades según tus necesidades

