import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertiesService } from '../../services/properties.service';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-properties-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        Propiedades en Venta
      </h1>

      <!-- Filtros -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-xl font-semibold mb-4">Filtros</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              [(ngModel)]="filters.city"
              placeholder="Ottawa"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Zona
            </label>
            <input
              type="text"
              [(ngModel)]="filters.zone"
              placeholder="Centro"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Precio Mínimo
            </label>
            <input
              type="number"
              [(ngModel)]="filters.minPrice"
              placeholder="0"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Precio Máximo
            </label>
            <input
              type="number"
              [(ngModel)]="filters.maxPrice"
              placeholder="1000000"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Habitaciones
            </label>
            <input
              type="number"
              [(ngModel)]="filters.bedrooms"
              placeholder="2"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div class="mt-4 flex gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Ordenar por
            </label>
            <select
              [(ngModel)]="filters.orderBy"
              class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Más recientes</option>
              <option value="price_asc">Precio: Menor a Mayor</option>
              <option value="price_desc">Precio: Mayor a Menor</option>
            </select>
          </div>
          <div class="flex items-end">
            <button
              (click)="applyFilters()"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div class="h-48 bg-gray-300"></div>
          <div class="p-4">
            <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Properties Grid -->
      <div *ngIf="!loading && properties.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let property of properties"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          [routerLink]="['/propiedades', property.slug]"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              [src]="property.mainImageUrl"
              [alt]="property.title"
              class="w-full h-full object-cover"
            />
            <span
              class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded"
              [ngClass]="{
                'bg-green-100 text-green-800': property.status === 'disponible',
                'bg-yellow-100 text-yellow-800': property.status === 'reservada',
                'bg-gray-100 text-gray-800': property.status === 'vendida'
              }"
            >
              {{ property.status | titlecase }}
            </span>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {{ property.title }}
            </h3>
            <p class="text-2xl font-bold text-blue-600 mb-2">
              {{ property.price | number }} {{ property.currency }}
            </p>
            <p class="text-sm text-gray-600 mb-3">
              {{ property.zone }}, {{ property.city }}
            </p>
            <div class="flex gap-4 text-sm text-gray-500">
              <span *ngIf="property.bedrooms">
                🛏️ {{ property.bedrooms }}
              </span>
              <span *ngIf="property.bathrooms">
                🚿 {{ property.bathrooms }}
              </span>
              <span *ngIf="property.builtAreaM2">
                📐 {{ property.builtAreaM2 }} m²
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div *ngIf="!loading && properties.length === 0" class="text-center py-12">
        <p class="text-gray-500 text-lg">No se encontraron propiedades</p>
      </div>
    </div>
  `,
})
export class PropertiesListComponent implements OnInit {
  properties: Property[] = [];
  loading = true;
  filters = {
    city: '',
    zone: '',
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    bedrooms: undefined as number | undefined,
    status: '',
    orderBy: 'recent',
  };

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.loading = true;
    const cleanFilters = Object.fromEntries(
      Object.entries(this.filters).filter(
        ([_, v]) => v !== '' && v !== undefined && v !== null,
      ),
    );
    this.propertiesService.getProperties(cleanFilters).subscribe({
      next: (data) => {
        this.properties = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading properties:', error);
        this.loading = false;
      },
    });
  }

  applyFilters() {
    this.loadProperties();
  }
}

