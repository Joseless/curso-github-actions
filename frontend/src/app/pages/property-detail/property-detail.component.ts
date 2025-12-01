import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertiesService } from '../../services/properties.service';
import { Property, CreateLeadDto } from '../../models/property.model';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div *ngIf="loading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="animate-pulse">
        <div class="h-64 bg-gray-300 rounded-lg mb-6"></div>
        <div class="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>

    <div *ngIf="!loading && property" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-6">
        <a routerLink="/propiedades" class="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Volver a propiedades
        </a>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ property.title }}</h1>
        <p class="text-3xl font-bold text-blue-600 mb-2">
          {{ property.price | number }} {{ property.currency }}
        </p>
        <p class="text-lg text-gray-600 mb-4">
          📍 {{ property.address || property.zone }}, {{ property.city }}, {{ property.country }}
        </p>
        <span
          class="inline-block px-3 py-1 text-sm font-semibold rounded"
          [ngClass]="{
            'bg-green-100 text-green-800': property.status === 'disponible',
            'bg-yellow-100 text-yellow-800': property.status === 'reservada',
            'bg-gray-100 text-gray-800': property.status === 'vendida'
          }"
        >
          {{ property.status | titlecase }}
        </span>
      </div>

      <!-- Gallery -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="col-span-1">
            <img
              [src]="property.mainImageUrl"
              [alt]="property.title"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div class="grid grid-cols-2 gap-4" *ngIf="property.imageUrls.length > 0">
            <img
              *ngFor="let imageUrl of property.imageUrls.slice(0, 4)"
              [src]="imageUrl"
              [alt]="property.title"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Características Principales -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div *ngIf="property.builtAreaM2" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.builtAreaM2 }}</div>
                <div class="text-sm text-gray-600">m² Construidos</div>
              </div>
              <div *ngIf="property.landAreaM2" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.landAreaM2 }}</div>
                <div class="text-sm text-gray-600">m² Terreno</div>
              </div>
              <div *ngIf="property.bedrooms" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.bedrooms }}</div>
                <div class="text-sm text-gray-600">Habitaciones</div>
              </div>
              <div *ngIf="property.bathrooms" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.bathrooms }}</div>
                <div class="text-sm text-gray-600">Baños</div>
              </div>
              <div *ngIf="property.parkingSpaces" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.parkingSpaces }}</div>
                <div class="text-sm text-gray-600">Parqueos</div>
              </div>
              <div *ngIf="property.yearBuilt" class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ property.yearBuilt }}</div>
                <div class="text-sm text-gray-600">Año Construcción</div>
              </div>
            </div>
          </div>

          <!-- Descripción -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ property.description }}
            </p>
          </div>

          <!-- Mapa -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Ubicación</h2>
            <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p class="text-gray-500">
                Mapa de {{ property.address || property.zone }}, {{ property.city }}
              </p>
            </div>
          </div>
        </div>

        <!-- Sidebar - Contact Form -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Solicitar Información
            </h2>
            <form (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  [(ngModel)]="leadForm.name"
                  name="name"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  [(ngModel)]="leadForm.email"
                  name="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  [(ngModel)]="leadForm.phone"
                  name="phone"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  [(ngModel)]="leadForm.message"
                  name="message"
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                [disabled]="submitting"
                class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ submitting ? 'Enviando...' : 'Enviar Solicitud' }}
              </button>
            </form>
            <div *ngIf="submitSuccess" class="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
              ¡Gracias! Tu solicitud ha sido enviada correctamente.
            </div>
            <div *ngIf="submitError" class="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
              Error al enviar la solicitud. Por favor, intenta nuevamente.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!loading && !property" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <p class="text-gray-500 text-lg">Propiedad no encontrada</p>
      <a routerLink="/propiedades" class="text-blue-600 hover:text-blue-800 mt-4 inline-block">
        Volver a propiedades
      </a>
    </div>
  `,
})
export class PropertyDetailComponent implements OnInit {
  property: Property | null = null;
  loading = true;
  submitting = false;
  submitSuccess = false;
  submitError = false;

  leadForm: CreateLeadDto = {
    propertyId: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadProperty(slug);
    }
  }

  loadProperty(slug: string) {
    this.loading = true;
    this.propertiesService.getPropertyBySlug(slug).subscribe({
      next: (data) => {
        this.property = data;
        this.leadForm.propertyId = data.id;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading property:', error);
        this.loading = false;
      },
    });
  }

  onSubmit() {
    if (!this.property) return;

    this.submitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.propertiesService.createLead(this.leadForm).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.submitting = false;
        this.leadForm = {
          propertyId: this.property!.id,
          name: '',
          email: '',
          phone: '',
          message: '',
        };
      },
      error: (error) => {
        console.error('Error submitting lead:', error);
        this.submitError = true;
        this.submitting = false;
      },
    });
  }
}

