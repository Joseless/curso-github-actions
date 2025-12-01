# Estado de Validación del Backend

## ✅ Configuración Completada

### 1. Dependencias Instaladas
- ✅ npm install ejecutado exitosamente
- ✅ 727 paquetes instalados

### 2. Prisma Configurado
- ✅ Cliente de Prisma generado (`npm run prisma:generate`)
- ✅ Migraciones ejecutadas (`npm run prisma:migrate`)
- ✅ Base de datos creada: `prisma/dev.db`
- ✅ Seed ejecutado: 10 propiedades creadas en Ottawa, Canadá

### 3. Compilación
- ✅ Proyecto compilado sin errores (`npm run build`)

## 🚀 Para Iniciar el Servidor

Ejecuta en una terminal:

```bash
cd backend
npm run start:dev
```

El servidor debería iniciar en `http://localhost:3000`

## 🧪 Validación de Endpoints

Una vez que el servidor esté corriendo, puedes validar los endpoints de dos formas:

### Opción 1: Script de Validación Automática

```powershell
cd backend
.\test-endpoints.ps1
```

### Opción 2: Validación Manual

#### 1. GET /api/properties
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/properties" -UseBasicParsing
```

#### 2. GET /api/properties con filtros
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/properties?city=Ottawa" -UseBasicParsing
```

#### 3. GET /api/properties/:slug
```powershell
# Primero obtén un slug de la lista
Invoke-WebRequest -Uri "http://localhost:3000/api/properties/moderno-condominio-centro-ottawa-450000" -UseBasicParsing
```

#### 4. POST /api/leads
```powershell
$leadData = @{
    propertyId = "clx..." # ID de una propiedad
    name = "Juan Pérez"
    email = "juan@example.com"
    phone = "+1 555 123 4567"
    message = "Estoy interesado"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/leads" `
    -Method POST `
    -ContentType "application/json" `
    -Body $leadData `
    -UseBasicParsing
```

## 📊 Datos de Prueba Disponibles

El seed ha creado 10 propiedades con los siguientes slugs:

1. `moderno-condominio-centro-ottawa-450000`
2. `casa-familiar-westboro-ottawa-675000`
3. `apartamento-lujo-byward-market-525000`
4. `casa-victoriana-glebe-ottawa-850000`
5. `condominio-moderno-kanata-ottawa-380000`
6. `casa-contemporanea-nepean-ottawa-720000`
7. `penthouse-lujo-downtown-ottawa-1200000`
8. `casa-rancho-barrhaven-ottawa-550000`
9. `apartamento-estudio-centretown-ottawa-320000`
10. `casa-duplex-inversión-ottawa-650000`

## 🔍 Verificar Base de Datos

Puedes abrir Prisma Studio para ver los datos:

```bash
npm run prisma:studio
```

Esto abrirá una interfaz web en `http://localhost:5555` donde puedes ver y editar los datos.

## ⚠️ Solución de Problemas

### El servidor no inicia
- Verifica que el puerto 3000 no esté en uso
- Revisa los logs en la consola para errores
- Asegúrate de que Prisma Client esté generado: `npm run prisma:generate`

### Error de conexión a la base de datos
- Verifica que `prisma/dev.db` existe
- Ejecuta las migraciones: `npm run prisma:migrate`
- Regenera el cliente: `npm run prisma:generate`

### Endpoints no responden
- Verifica que el servidor esté corriendo
- Revisa que CORS esté configurado correctamente
- Verifica la URL: debe ser `http://localhost:3000/api/properties`

## ✅ Checklist de Validación

- [ ] Servidor iniciado en puerto 3000
- [ ] GET /api/properties retorna lista de propiedades
- [ ] GET /api/properties?city=Ottawa filtra correctamente
- [ ] GET /api/properties/:slug retorna una propiedad
- [ ] POST /api/leads crea un lead exitosamente
- [ ] Base de datos contiene 10 propiedades
- [ ] Prisma Studio funciona correctamente

