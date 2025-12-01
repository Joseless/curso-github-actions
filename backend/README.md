# Property Sales Backend API

Backend API desarrollado con NestJS, Prisma y TypeScript para la plataforma de venta de propiedades.

## Stack Tecnológico

- **NestJS**: Framework Node.js progresivo para construir aplicaciones del lado del servidor
- **Prisma**: ORM moderno para TypeScript y Node.js
- **TypeScript**: Lenguaje de programación tipado
- **SQLite**: Base de datos (puede cambiarse fácilmente a PostgreSQL, MySQL, etc.)

## Instalación

```bash
# Instalar dependencias
npm install

# Generar cliente de Prisma
npm run prisma:generate

# Ejecutar migraciones
npm run prisma:migrate

# Poblar base de datos con datos de ejemplo
npm run prisma:seed
```

## Desarrollo

```bash
# Iniciar servidor en modo desarrollo
npm run start:dev

# El servidor estará disponible en http://localhost:3000
```

## Endpoints API

### Propiedades

- `GET /api/properties` - Obtener listado de propiedades con filtros opcionales
  - Query params: `city`, `zone`, `minPrice`, `maxPrice`, `bedrooms`, `status`, `orderBy`
- `GET /api/properties/:slug` - Obtener detalle de una propiedad por slug

### Leads

- `POST /api/leads` - Crear un nuevo lead de contacto
  - Body: `{ propertyId, name, email, phone, message }`

## Estructura del Proyecto

```
backend/
├── src/
│   ├── properties/     # Módulo de propiedades
│   ├── leads/          # Módulo de leads
│   ├── prisma/         # Servicio de Prisma
│   └── main.ts         # Punto de entrada
├── prisma/
│   ├── schema.prisma   # Esquema de base de datos
│   └── seed.ts         # Datos de ejemplo
└── package.json
```

