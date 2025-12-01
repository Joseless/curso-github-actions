<<<<<<< HEAD
<!--
  <<< Author notes: Header of the course >>>
  Read <https://skills.github.com/quickstart> for more information about how to build courses using this template.
  Include a 1280×640 image, course name in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Next to "About", add description & tags; disable releases, packages, & environments.
  Add your open source license, GitHub uses Creative Commons Attribution 4.0 International.
-->

# Curso Básico de GitHub Actions

_Aprende los conceptos básicos para crear tu primer flujo de CI/CD para tus proyectos con GitHub Actions_

<!--
  <<< Author notes: Start of the course >>>
  Include start button, a note about Actions minutes,
  and tell the learner why they should take the course.
  Each step should be wrapped in <details>/<summary>, with an `id` set.
  The start <details> should have `open` as well.
  Do not use quotes on the <details> tag attributes.
-->

<details id=0>
<summary><h2>Bienvenido</h2></summary>

¡Bienvenido al Curso Básico de GitHub Actions de Platzi! en este curso aprenderás a realizar flujos de Integración y Despliegue Continúo (CI/CD) para tus proyectos personales, así como automatizar cualquier proceso que que te ayude a impulsar tu flujo de trabajo :rocket:.

- **¿Para quíen es este curso?**: Desarrolladores backend, frontend y Full Stack; DevOps; SREs, Estudiantes, Líderes de equipo, cualquier usuario de GitHub.
- **¿Qué aprenderás?**: Aprenderás a automatizar los procesos de compilación, pruebas y despliegue de sus proyectos.
- **¿Qué construirás?**: Una serie de flujos de trabajo que usen los principales conceptos detrás de GitHub Actions (Jobs, Steps, Actions, Variables, Expresiones, entre otros).
- **Prerequisitos**: Conocimientos básicos sobre Git y GitHub (realizar commits y push; crear pull requests e issues; agregar etiquetas).
- **Duración**: Este curso tendrá 5 pasos y lo podrás terminar en menos de 2 horas.

## ¿Cómo iniciar el curso?

1. Haz click derecho en **Start course** y abre el enlace en una nueva pestaña.
   <br />[![start-course](https://user-images.githubusercontent.com/1221423/218596841-0645fe1a-4aaf-4f51-9ab3-8aa2d3fdd487.svg)](https://github.com/platzi/curso-github-actions/generate)
2. En la nueva pestaña, llena los campos para crear un nuevo repositorio.
   - En owner, elige tu cuenta personal o la de tu organización.
   - Es recomendado dejar el repositorio como público ya que los privados consumen [minutos que pueden ser cobrados](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
   ![Create a new repository](https://user-images.githubusercontent.com/1221423/218594143-e60462b6-9f2a-4fa3-80de-063ac5429aab.png)
3. Después de que el nuevo repositorio ha sido creado, espera por cerca de 20 segundos; luego, recarga la página. Sigue los pasos que aparezcan en el README del repositorio.

</details>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
  TBD-step-1-notes.
-->

<details id=1 open>
<summary><h2>Paso 1: Crea tu primer workflow file</h2></summary>

_¡Bienvenido al "Curso Básico de GitHub Actions"! :wave:_

Primero, aprenderemos los conceptos básicos de GitHub Actions

**¿Qué es GitHub Actions?**: Es una plataforma de integración y despliegue continuo (CI/CD) que permite automatizar procesos de compilación, pruebas y despliegue.

**¿Qué es un Workflow?**: Es un proceso automatizado configurable que ejecutará uno o más jobs. Se define como un archivo YAML en el directorio .github/workflows de tu repositorio y se ejecutará cuando lo active un evento.

**¿Qué es un Event?**: Actividad específica en un repositorio, la cual activa una ejecución de un workflow.

**¿Qué es un Job?**: Conjunto de tareas (steps) en un workflow que se ejecutan en el mismo runner.

**¿Qué es un Runner?**: Servidor que ejecuta los workflows. GitHub provee runners de Ubuntu, Windows y MacOS.

**¿Qué es un Step?**: Puede ser: un script/comando de shell o un action que se ejecutará.

**¿Qué es un Action?**: Aplicación personalizada que realiza una tarea compleja repetitiva.

### :keyboard: Actividad: Crea un workflow file

1. Abra una nueva pestaña del navegador y siga los pasos de la segunda pestaña mientras lee las instrucciones de esta pestaña.
1. Cree un Pull Request para ver todos los cambios que realizará a lo largo de este curso. Haga clic en la pestaña *Pull Requests*, haga clic en *New Pull Request*, establezca `base: main` y `compare: aprendiendo-github-actions`.
1. Vaya a la pestaña *Code*.
1. En el menú desplegable de la rama *main*, haga clic en la rama *aprendiendo-github-actions*.
1. Agrega un script simple en tu lenguaje de programación preferido (Python, JavaScript, Go, Rust, etc.) que imprima un "Hola Mundo".
1. Navegue a la carpeta `.github/workflows/`, luego seleccione **Add file** y haga clic en **Create new file**.
1. En el campo **Name your file...**, ingrese `hola-mundo.yml`.
1. Con lo aprendido hasta el momento, crea un workflow file que corra el archivo del paso anterior que imprime el "Hola Mundo".
1. Espere unos 20 segundos y luego actualice esta página para el siguiente paso.

  <details id=1.1>
  <summary><h3>Ayuda</h2></summary>

  Crea un archivo llamado `hola_mundo.py` en la raiz del repositorio y agrega el siguiente contenido:
  ```python
  import os


  def main():
      nombre = os.getenv("USERNAME")
      print(f"¡Hola, {nombre} desde GitHub!")


  if __name__ == "__main__":
      main()
  ```

  Agregue el siguiente contenido al archivo `hola-mundo.yml`:
  ```yaml
  name: Aprendiendo GitHub Actions
  run-name: ¡Estoy aprendiendo GitHub Actions!
  on: [push]
  jobs:
    hola-mundo:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v3
        - name: Definir variable
          run: echo "USERNAME=${{ github.actor }}" >> $GITHUB_ENV
        - name: Correr script
          run: python hola_mundo.py
  ```

    
  </details>

</details>

<!--
  <<< Author notes: Step 2 >>>
  Start this step by acknowledging the previous step.
  Define terms and link to docs.github.com.
  TBD-step-2-notes.
-->

<details id=2>
<summary><h2>Paso 2: Conoce los principales Triggers</h2></summary>

_¡Creaste tu primer Workflow! :tada:_

Ahora que conoces los componentes básicos de un workflow en GitHub Actions podemos empezar a explorar nuevos conceptos. El primero será ver los principales _eventos_ o _Triggers_ para lanzar un nuevo workflow.

**¿Qué eventos exploraremos?**

- push
- pull_request
- issues
- issue_comment
- workflow_dispatch
- schedule

### :keyboard: Actividad: Expermienta con los distintos Triggers

1. Vuelve a la rama en que estabamos trabajando (*aprendiendo-github-actions*).
1. Navegue a la carpeta `.github/workflows/`, luego seleccione **Add file** y haga clic en **Create new file**.
1. En el campo **Name your file...**, ingrese `triggers.yml`.
1. Crea un workflow que incluya al menos 3 de los triggers que vimos en la clase.
1. Espere unos 20 segundos y luego actualice esta página para el siguiente paso.

  <details id=1.1>
  <summary><h3>Ayuda</h2></summary>
    
  Agregue el siguiente contenido al archivo `triggers.yml`:
  ```yaml
  name: Triggers
  run-name: ¡Estoy aprendiendo a usar diferentes Triggers!
  on:
    push:
      branches:
        - master
    pull_request:
      types: [opened, synchronize, reopened]
      paths:
        - '**.py'
    issues:
      types:
        - labeled
    workflow_dispatch:
      inputs:
        lenguaje_favorito:
          description: 'Lenguaje favorito'
          default: Python
          required: true
          type: choice
          options:
          - Python
          - JavaScript
          - Go
        nombre:
          description: 'Tu nombre'
          required: true
          default: Juan
          type: string
    schedule:
      - cron:  '15 22 * * *'
  jobs:
    hola-mundo-manual:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v3
        - name: Definir nombre
          run: echo "USERNAME=${{ inputs.nombre }}" >> $GITHUB_ENV
        - name: Definir lenguaje
          run: echo "LANGUAGE=${{ inputs.lenguaje_favorito }}" >> $GITHUB_ENV
        - name: Correr script
          run: python hola_lenguaje.py
    hola-mundo:
      if: ${{ github.event_name != 'workflow_dispatch' }}
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v3
        - name: Definir variable
          run: echo "USERNAME=${{ github.actor }}" >> $GITHUB_ENV
        - name: Correr script
          run: python hola_mundo.py

  ```
  </details>


</details>

<!--
  <<< Author notes: Step 3 >>>
  Start this step by acknowledging the previous step.
  Define terms and link to docs.github.com.
  TBD-step-3-notes.
-->

<details id=3>
<summary><h2>Paso 3: Aprende a usar Expresiones</h2></summary>

_¡Buen trabajo usando los distintos eventos para lanzar nuevos workflows! :sparkles:_

Ahora que conoces como lanzar distintos workflows con los principales tipos de eventos es importante sacar provecho del uso de _Expresiones_ en nuestros workflow files para obtener mayor versatilidad y opciones.

**¿Qué son las expresiones?**: Es una forma de configurar variables de entorno y acceder al contexto. Usan una sintaxis especial ${{ <expresión> }} 

Puedes combinar valores literales, referencias de contexto y funciones usando operadores o condicionales.

### :keyboard: Actividad: Crea tus primeras Expresiones

1. Vuelve a la rama en que estabamos trabajando (*aprendiendo-github-actions*).
1. Navegue a la carpeta `.github/workflows/`, luego seleccione **Add file** y haga clic en **Create new file**.
1. En el campo **Name your file...**, ingrese `expresiones.yml`.
1. Crea un workflow que incluya al menos 3 expresiones de las vistas en clase.
1. Espere unos 20 segundos y luego actualice esta página para el siguiente paso.

  <details id=1.1>
  <summary><h3>Ayuda</h2></summary>
    
  Agregue el siguiente contenido al archivo `expresiones.yml`:
  ```yaml
  name: Expresiones
  run-name: ¡Estoy aprendiendo a usar Expresiones!
  on:
    workflow_dispatch:
      inputs:
        edad:
          description: 'Edad'
          required: true
          type: integer
        nombre:
          description: 'Tu nombre'
          required: true
          default: 'Juan'
          type: string
  jobs:
    mayor:
      if: ${{ inputs.edad >= 18 }} 
      runs-on: ubuntu-latest
      steps:
        - name: Correr script
          run: echo ${{ inputs.nombre }} es mayor de edad
    menor:
      if: ${{ inputs.edad < 18 }} 
      runs-on: ubuntu-latest
      steps:
        - name: Correr script
          run: echo ${{ inputs.nombre }} es menor de edad
  ```
  </details>

</details>

<!--
  <<< Author notes: Step 4 >>>
  Start this step by acknowledging the previous step.
  Define terms and link to docs.github.com.
  TBD-step-4-notes.
-->

<details id=4>
<summary><h2>Paso 4: Aprende a usar los distintos Contextos</h2></summary>

_¡Excelente trabajo con el uso de Expresiones! :partying_face:_

Como ya vimos, mediante el uso de Expresiones podemos acceder a información de formá dinámica durante la ejecución de nuestros workflows. Una de las fuentes más importantes de información usada es la que nos brindan los contextos.

**¿Qué son los contextos?**: Es una manera de acceder a información acerca de las ejecuciones de workflows, variables, entornos de runners, jobs y steps. Cada contexto es un objeto que contiene propiedades.

Los más usados son:

- github
- env
- vars
- job
- steps
- runner
- secrets
- inputs

### :keyboard: Actividad: Usa los diferentes contextos

1. Vuelve a la rama en que estabamos trabajando (*aprendiendo-github-actions*).
1. Navegue a la carpeta `.github/workflows/`, luego seleccione **Add file** y haga clic en **Create new file**.
1. En el campo **Name your file...**, ingrese `contextos.yml`.
1. Crea un workflow que incluya el uso de alguno de los contextos que vimos en clase.
1. Espere unos 20 segundos y luego actualice esta página para el siguiente paso.

  <details id=1.1>
  <summary><h3>Ayuda</h2></summary>
    
  Agregue el siguiente contenido al archivo `contextos.yml`:
  ```yaml
  name: Contexto
  run-name: ¡Estoy aprendiendo a usar Contextos!
  on: push
  jobs:
    check-main:
      if: ${{ github.ref == 'refs/heads/main' }}
      runs-on: ubuntu-latest
      steps:
        - run: echo "Desplegando en la rama $GITHUB_REF"
  ```
  </details>

</details>

<!--
  <<< Author notes: Step 5 >>>
  Start this step by acknowledging the previous step.
  Define terms and link to docs.github.com.
  TBD-step-5-notes.
-->

<details id=5>
<summary><h2>Paso 5: Aprende a usar las Variables de Entorno</h2></summary>

¡Ya estás a un paso de terminar! :heart:

El uso de variables de entorno es lo único que te falta por aprender de los principales conceptos y componentes de GitHub Actions, así que vamos a por ello.

**¿Qué son las variables?**: Son una manera de almacenar y reutilizar información de configuración no confidencial. Tales como datos de configuración, como marcas del compilador, nombres de usuario o nombres de servidor como variables.

### :keyboard: Actividad: Usa variables de entorno en tu workflow

1. Vuelve a la rama en que estabamos trabajando (*aprendiendo-github-actions*).
1. Navegue a la carpeta `.github/workflows/`, luego seleccione **Add file** y haga clic en **Create new file**.
1. En el campo **Name your file...**, ingrese `variables.yml`.
1. Crea un workflow que incluya el uso de variables.
1. Espere unos 20 segundos y luego actualice esta página para el siguiente paso.

  <details id=1.1>
  <summary><h3>Ayuda</h2></summary>
    
  Agregue el siguiente contenido al archivo `variables.yml`:
  ```yaml
  name: Saludo usando variables
  run-name: ¡Estoy aprendiendo a usar Variables!
  on:
    workflow_dispatch
  env:
    DIA_DE_SEMANA: Lunes
  jobs:
    saludo-variables:
      runs-on: ubuntu-latest
      env:
        SALUDO: Hola
      steps:
        - name: Saludar
          run: echo "$SALUDO, $NOMBRE. Hoy es $DIA_DE_SEMANA!"
          env:
            NOMBRE: Juan
  ```
  </details>

</details>

<!--
  <<< Author notes: Finish >>>
  Review what we learned, ask for feedback, provide next steps.
-->

<details id=X>
<summary><h2>Cierre</h2></summary>

_¡Felicidades! haz completado esta sección del Curso Básico de GitHub Actions de Platzi 💚_

<img src=TBD-celebrate-image alt=celebrate width=300 align=right>

Ya conoces los principales conceptos para crear workflows que te sirvan para automatizar todo tipo de tareas incluidas las de integración y despliegue continúo.

Has aprendido sobre:

- Qué son Worfklows.
- Qué son Events.
- Qué son Jobs.
- Qué son Runners.
- Qué son Steps.
- Qué son Ations.
- Cuál es la sintaxis de un workflow file.
- Cuáles son los principales Triggers.
- Uso de Expresiones.
- Acceder a información de Contextos.
- El uso de variables para acceder a información reutilizable.

### ¿Qué sigue?

- Puedes crear flujos de Integración Continúa (CI) para tus proyectos.
- Puedes crear flujos de Despliegue (CD) para tus proyectos.
- Puedes automatizar todo tipo de tareas en tus repositorios para mantener un mejor orden y control.

</details>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

&copy; 2023 Platzi &bull; [Código de Conducta](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [CC-BY-4.0 License](https://creativecommons.org/licenses/by/4.0/legalcode)
=======
# Property Sales Platform

Plataforma completa de venta de propiedades desarrollada con Angular 20 (frontend) y NestJS (backend).

> **📌 Nota para Cursor/IA**: Ver `.cursorrules` para contexto completo del proyecto, estructura, modelos de datos, endpoints, y convenciones de código.

## 🚀 Stack Tecnológico

### Frontend
- **Angular 20**: Framework de aplicaciones web moderno
- **Tailwind CSS**: Framework de CSS utility-first para diseño rápido
- **TypeScript**: Lenguaje de programación tipado

### Backend
- **NestJS**: Framework Node.js progresivo para construir APIs robustas
- **Prisma**: ORM moderno para TypeScript y Node.js
- **SQLite**: Base de datos (fácilmente migrable a PostgreSQL, MySQL, etc.)
- **TypeScript**: Lenguaje de programación tipado

## 📋 Características

- ✅ Listado de propiedades con filtros avanzados (ciudad, zona, precio, habitaciones)
- ✅ Página de detalle con galería de imágenes
- ✅ Formulario de contacto para captación de leads
- ✅ Diseño responsive y moderno
- ✅ Estados de carga y manejo de errores
- ✅ API RESTful completa
- ✅ Base de datos con Prisma ORM

## 🏗️ Estructura del Proyecto

```
.
├── backend/          # API NestJS + Prisma
│   ├── src/
│   │   ├── properties/   # Módulo de propiedades
│   │   ├── leads/        # Módulo de leads
│   │   └── prisma/       # Servicio de Prisma
│   └── prisma/
│       ├── schema.prisma # Esquema de base de datos
│       └── seed.ts       # Datos de ejemplo (Ottawa, Canadá)
│
└── frontend/        # Aplicación Angular 20
    └── src/
        ├── app/
        │   ├── components/  # Componentes reutilizables
        │   ├── pages/       # Páginas principales
        │   ├── services/    # Servicios (API)
        │   └── models/      # Modelos de datos
        └── styles.scss      # Estilos con Tailwind
```

## 🚀 Instalación y Configuración

### Backend

```bash
cd backend

# Instalar dependencias
npm install

# Generar cliente de Prisma
npm run prisma:generate

# Ejecutar migraciones
npm run prisma:migrate

# Poblar base de datos con datos de ejemplo (10 propiedades en Ottawa)
npm run prisma:seed

# Iniciar servidor de desarrollo
npm run start:dev

# El servidor estará disponible en http://localhost:3000
```

### Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

## 📡 Endpoints API

### Propiedades

- `GET /api/properties` - Obtener listado de propiedades
  - Query params opcionales:
    - `city`: Filtrar por ciudad
    - `zone`: Filtrar por zona
    - `minPrice`: Precio mínimo
    - `maxPrice`: Precio máximo
    - `bedrooms`: Número de habitaciones
    - `status`: Estado (disponible, reservada, vendida)
    - `orderBy`: Ordenamiento (price_asc, price_desc, recent)

- `GET /api/properties/:slug` - Obtener detalle de una propiedad por slug

### Leads

- `POST /api/leads` - Crear un nuevo lead de contacto
  ```json
  {
    "propertyId": "prop_123",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+52 555 555 5555",
    "message": "Estoy interesado en agendar una visita"
  }
  ```

## 🗄️ Modelo de Datos

### Property
- **id**: string (cuid generado por Prisma)
- **slug**: string (único, formato: titulo-zona-precio)
- **title**: string
- **description**: string
- **operationType**: 'venta' (fijo)
- **price**: number
- **currency**: 'USD' | 'CAD' | 'EUR'
- **country, city, zone, address**: string
- **builtAreaM2, landAreaM2**: number | null
- **bedrooms, bathrooms, parkingSpaces, yearBuilt**: number | null
- **status**: 'disponible' | 'reservada' | 'vendida'
- **mainImageUrl**: string (URL de imagen principal)
- **imageUrls**: string[] (array parseado desde JSON string en DB)
- **featured**: boolean
- **createdAt, updatedAt**: DateTime

### Lead
- **id**: string (cuid)
- **propertyId**: string (FK a Property)
- **name, email, phone**: string (requeridos)
- **message**: string (opcional)
- **createdAt**: DateTime

## 🎨 Páginas y Componentes

### Frontend Routes
- `/propiedades` - Listado de propiedades con filtros
- `/propiedades/:slug` - Detalle de propiedad con formulario de contacto

### Componentes Principales

**PropertiesListComponent** (`/propiedades`)
- Filtros: ciudad, zona, precio min/max, habitaciones, ordenamiento
- Grid responsive de tarjetas con imágenes
- Estados: loading (skeleton), empty, error
- Navegación a detalle con RouterLink

**PropertyDetailComponent** (`/propiedades/:slug`)
- Galería de imágenes (mainImageUrl + imageUrls array)
- Características principales en grid
- Descripción completa
- Mapa placeholder
- Formulario de contacto (CreateLeadDto)
- Estados: loading, success, error

**PropertiesService**
- `getProperties(filters?)`: Observable<Property[]>
- `getPropertyBySlug(slug)`: Observable<Property>
- `createLead(lead)`: Observable<any>
- API URL: `http://localhost:3000/api`

## 📝 Datos de Ejemplo

El seed incluye 10 propiedades de ejemplo en Ottawa, Canadá:
- Condominios modernos
- Casas familiares
- Apartamentos de lujo
- Propiedades en diferentes zonas (Centro, Westboro, Glebe, Kanata, etc.)

## 🔧 Scripts Útiles

### Backend
- `npm run start:dev` - Desarrollo con hot-reload
- `npm run prisma:studio` - Abrir Prisma Studio (GUI para base de datos)
- `npm run prisma:seed` - Ejecutar seed de datos

### Frontend
- `npm start` - Servidor de desarrollo
- `npm run build` - Build de producción

## 🔧 Configuración Técnica

### Backend
- **Puerto**: 3000
- **CORS**: Habilitado para `http://localhost:4200`
- **Global Prefix**: `/api`
- **Validation**: ValidationPipe global con `transform: true`
- **Base de Datos**: SQLite (dev.db en `backend/prisma/`)

### Frontend
- **Puerto**: 4200
- **API URL**: `http://localhost:3000/api`
- **Tailwind**: Configurado en `tailwind.config.js`
- **PostCSS**: Configurado para procesar Tailwind
- **Standalone Components**: Angular 20 (sin NgModules)

### Patrones de Implementación
1. **Filtros**: Construidos dinámicamente, solo se agregan al `where` si tienen valor
2. **ImageUrls**: Almacenados como JSON string en DB, parseados a array en service
3. **Validación**: DTOs con decoradores `class-validator`
4. **Errores**: `NotFoundException` para recursos no encontrados
5. **Loading States**: Skeleton loaders durante carga
6. **Formularios**: Reactive forms con validación HTML5 y `ngModel`

## 📚 Próximos Pasos (Opcional)

- [ ] SEO avanzado con meta tags dinámicas
- [ ] Sistema de favoritos con localStorage
- [ ] Propiedades similares
- [ ] Paginación o infinite scroll
- [ ] Integración con mapas reales (Google Maps, Mapbox)
- [ ] Autenticación de usuarios
- [ ] Panel de administración

## 📄 Licencia

MIT
>>>>>>> bf3db55 (Initial commit)
