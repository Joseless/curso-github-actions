# Script de validación de endpoints del backend
Write-Host "=== Validación de Endpoints del Backend ===" -ForegroundColor Cyan
Write-Host ""

# Esperar a que el servidor esté listo
Write-Host "Esperando a que el servidor esté listo..." -ForegroundColor Yellow
$maxAttempts = 10
$attempt = 0
$serverReady = $false

while ($attempt -lt $maxAttempts -and -not $serverReady) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
        $serverReady = $true
        Write-Host "✅ Servidor está listo!" -ForegroundColor Green
    } catch {
        $attempt++
        Start-Sleep -Seconds 2
        Write-Host "Intento $attempt/$maxAttempts..." -ForegroundColor Gray
    }
}

if (-not $serverReady) {
    Write-Host "❌ El servidor no está respondiendo. Asegúrate de que esté ejecutándose en http://localhost:3000" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Test 1: GET /api/properties
Write-Host "1. Probando GET /api/properties..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties" -UseBasicParsing
    $properties = $response.Content | ConvertFrom-Json
    Write-Host "   ✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   ✅ Propiedades encontradas: $($properties.Count)" -ForegroundColor Green
    if ($properties.Count -gt 0) {
        Write-Host "   ✅ Primera propiedad: $($properties[0].title)" -ForegroundColor Green
    }
} catch {
    Write-Host "   ❌ Error: $_" -ForegroundColor Red
}

Write-Host ""

# Test 2: GET /api/properties con filtros
Write-Host "2. Probando GET /api/properties?city=Ottawa..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties?city=Ottawa" -UseBasicParsing
    $properties = $response.Content | ConvertFrom-Json
    Write-Host "   ✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   ✅ Propiedades en Ottawa: $($properties.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Error: $_" -ForegroundColor Red
}

Write-Host ""

# Test 3: GET /api/properties/:slug
Write-Host "3. Probando GET /api/properties/:slug..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties" -UseBasicParsing
    $properties = $response.Content | ConvertFrom-Json
    if ($properties.Count -gt 0) {
        $firstSlug = $properties[0].slug
        $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties/$firstSlug" -UseBasicParsing
        $property = $response.Content | ConvertFrom-Json
        Write-Host "   ✅ Status: $($response.StatusCode)" -ForegroundColor Green
        Write-Host "   ✅ Propiedad encontrada: $($property.title)" -ForegroundColor Green
        Write-Host "   ✅ Precio: $($property.price) $($property.currency)" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  No hay propiedades para probar" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error: $_" -ForegroundColor Red
}

Write-Host ""

# Test 4: POST /api/leads
Write-Host "4. Probando POST /api/leads..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/properties" -UseBasicParsing
    $properties = $response.Content | ConvertFrom-Json
    if ($properties.Count -gt 0) {
        $propertyId = $properties[0].id
        $leadData = @{
            propertyId = $propertyId
            name = "Test User"
            email = "test@example.com"
            phone = "+1 555 123 4567"
            message = "Test message from validation script"
        } | ConvertTo-Json
        
        $response = Invoke-WebRequest -Uri "http://localhost:3000/api/leads" `
            -Method POST `
            -ContentType "application/json" `
            -Body $leadData `
            -UseBasicParsing
        
        Write-Host "   ✅ Status: $($response.StatusCode)" -ForegroundColor Green
        Write-Host "   ✅ Lead creado exitosamente" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  No hay propiedades para crear lead" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Validación completada ===" -ForegroundColor Cyan

