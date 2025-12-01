import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with Ottawa properties...');

  const properties = [
    {
      slug: 'moderno-condominio-centro-ottawa-450000',
      title: 'Moderno Condominio en el Centro de Ottawa',
      description: 'Hermoso condominio de 2 habitaciones en el corazón de Ottawa. Ubicado cerca de restaurantes, tiendas y transporte público. Perfecto para profesionales jóvenes o parejas.',
      operationType: 'venta',
      price: 450000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Centro',
      address: '123 Main Street, Ottawa, ON',
      builtAreaM2: 85,
      landAreaM2: null,
      bedrooms: 2,
      bathrooms: 1,
      parkingSpaces: 1,
      yearBuilt: 2018,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
      ]),
      featured: true,
    },
    {
      slug: 'casa-familiar-westboro-ottawa-675000',
      title: 'Casa Familiar en Westboro',
      description: 'Espaciosa casa de 3 habitaciones en el prestigioso barrio de Westboro. Con jardín amplio, garaje para 2 autos y acabados de lujo. Ideal para familias.',
      operationType: 'venta',
      price: 675000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Westboro',
      address: '456 Richmond Road, Ottawa, ON',
      builtAreaM2: 180,
      landAreaM2: 350,
      bedrooms: 3,
      bathrooms: 2,
      parkingSpaces: 2,
      yearBuilt: 2015,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
      ]),
      featured: true,
    },
    {
      slug: 'apartamento-lujo-byward-market-525000',
      title: 'Apartamento de Lujo en ByWard Market',
      description: 'Elegante apartamento de 1 habitación con vista panorámica. Ubicado en el histórico ByWard Market, cerca de atracciones turísticas y vida nocturna.',
      operationType: 'venta',
      price: 525000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'ByWard Market',
      address: '789 York Street, Ottawa, ON',
      builtAreaM2: 65,
      landAreaM2: null,
      bedrooms: 1,
      bathrooms: 1,
      parkingSpaces: 0,
      yearBuilt: 2020,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
      ]),
      featured: false,
    },
    {
      slug: 'casa-victoriana-glebe-ottawa-850000',
      title: 'Casa Victoriana Restaurada en Glebe',
      description: 'Hermosa casa victoriana completamente restaurada con 4 habitaciones. Mantiene el encanto histórico con todas las comodidades modernas. Ubicada en el barrio más deseable de Ottawa.',
      operationType: 'venta',
      price: 850000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Glebe',
      address: '321 Bank Street, Ottawa, ON',
      builtAreaM2: 220,
      landAreaM2: 500,
      bedrooms: 4,
      bathrooms: 3,
      parkingSpaces: 2,
      yearBuilt: 1895,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
        'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
      ]),
      featured: true,
    },
    {
      slug: 'condominio-moderno-kanata-ottawa-380000',
      title: 'Condominio Moderno en Kanata',
      description: 'Nuevo condominio de 2 habitaciones en Kanata. Perfecto para primera vivienda o inversión. Incluye todas las comodidades modernas y está cerca de centros comerciales.',
      operationType: 'venta',
      price: 380000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Kanata',
      address: '555 Terry Fox Drive, Kanata, ON',
      builtAreaM2: 90,
      landAreaM2: null,
      bedrooms: 2,
      bathrooms: 2,
      parkingSpaces: 1,
      yearBuilt: 2022,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
      ]),
      featured: false,
    },
    {
      slug: 'casa-contemporanea-nepean-ottawa-720000',
      title: 'Casa Contemporánea en Nepean',
      description: 'Moderno diseño arquitectónico con 3 habitaciones y estudio. Amplios espacios abiertos, cocina gourmet y terraza privada. Perfecta para quienes buscan estilo y funcionalidad.',
      operationType: 'venta',
      price: 720000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Nepean',
      address: '888 Merivale Road, Nepean, ON',
      builtAreaM2: 200,
      landAreaM2: 400,
      bedrooms: 3,
      bathrooms: 2,
      parkingSpaces: 2,
      yearBuilt: 2019,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
      ]),
      featured: false,
    },
    {
      slug: 'penthouse-lujo-downtown-ottawa-1200000',
      title: 'Penthouse de Lujo en Downtown Ottawa',
      description: 'Exclusivo penthouse de 3 habitaciones con terraza privada y vistas espectaculares. Acabados de primera calidad, cocina italiana y sistema de seguridad avanzado.',
      operationType: 'venta',
      price: 1200000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Downtown',
      address: '999 Wellington Street, Ottawa, ON',
      builtAreaM2: 250,
      landAreaM2: null,
      bedrooms: 3,
      bathrooms: 3,
      parkingSpaces: 2,
      yearBuilt: 2021,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800'
      ]),
      featured: true,
    },
    {
      slug: 'casa-rancho-barrhaven-ottawa-550000',
      title: 'Casa Rancho en Barrhaven',
      description: 'Cómoda casa rancho de 2 habitaciones en planta baja, ideal para personas mayores o quienes prefieren un solo nivel. Barrio tranquilo y seguro.',
      operationType: 'venta',
      price: 550000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Barrhaven',
      address: '777 Greenbank Road, Barrhaven, ON',
      builtAreaM2: 150,
      landAreaM2: 300,
      bedrooms: 2,
      bathrooms: 2,
      parkingSpaces: 2,
      yearBuilt: 2010,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
      ]),
      featured: false,
    },
    {
      slug: 'apartamento-estudio-centretown-ottawa-320000',
      title: 'Apartamento Estudio en Centretown',
      description: 'Acogedor apartamento estudio perfecto para estudiantes o profesionales jóvenes. Ubicado en el corazón de Centretown, cerca de universidades y oficinas.',
      operationType: 'venta',
      price: 320000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Centretown',
      address: '234 Elgin Street, Ottawa, ON',
      builtAreaM2: 40,
      landAreaM2: null,
      bedrooms: 0,
      bathrooms: 1,
      parkingSpaces: 0,
      yearBuilt: 2017,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
      ]),
      featured: false,
    },
    {
      slug: 'casa-duplex-inversión-ottawa-650000',
      title: 'Casa Duplex para Inversión en Ottawa',
      description: 'Duplex de 4 unidades con excelente potencial de ingresos. Cada unidad tiene 2 habitaciones. Ubicado en zona en crecimiento con alta demanda de alquiler.',
      operationType: 'venta',
      price: 650000,
      currency: 'CAD',
      country: 'Canadá',
      city: 'Ottawa',
      zone: 'Vanier',
      address: '111 Montreal Road, Vanier, ON',
      builtAreaM2: 300,
      landAreaM2: 600,
      bedrooms: 4,
      bathrooms: 4,
      parkingSpaces: 4,
      yearBuilt: 2012,
      status: 'disponible',
      mainImageUrl: 'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
      imageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600566753086-5f72d3c6000d?w=800',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
      ]),
      featured: false,
    },
  ];

  for (const property of properties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: property,
    });
  }

  console.log(`Seeded ${properties.length} properties`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

