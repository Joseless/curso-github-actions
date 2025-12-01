export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  operationType: 'venta';
  price: number;
  currency: 'USD' | 'CAD' | 'EUR';
  country: string;
  city: string;
  zone: string;
  address: string;
  builtAreaM2: number | null;
  landAreaM2: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parkingSpaces: number | null;
  yearBuilt: number | null;
  status: 'disponible' | 'reservada' | 'vendida';
  mainImageUrl: string;
  imageUrls: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadDto {
  propertyId: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

