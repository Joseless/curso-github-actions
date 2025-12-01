# Property Sales Frontend

Frontend desarrollado con Angular 20, Tailwind CSS y TypeScript para la plataforma de venta de propiedades.

## Stack Tecnológico

- **Angular 20**: Framework de aplicaciones web
- **Tailwind CSS**: Framework de CSS utility-first
- **TypeScript**: Lenguaje de programación tipado
- **RxJS**: Librería para programación reactiva

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── services/        # Servicios (API)
│   │   ├── models/          # Modelos de datos
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.scss          # Estilos globales con Tailwind
│   └── main.ts
├── tailwind.config.js
└── package.json
```

## Páginas

- `/propiedades` - Listado de propiedades con filtros
- `/propiedades/:slug` - Detalle de propiedad con formulario de contacto

## Características

- ✅ Listado de propiedades con filtros avanzados
- ✅ Página de detalle con galería de imágenes
- ✅ Formulario de contacto para captación de leads
- ✅ Diseño responsive con Tailwind CSS
- ✅ Estados de carga y manejo de errores

