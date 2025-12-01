import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/propiedades',
    pathMatch: 'full',
  },
  {
    path: 'propiedades',
    loadComponent: () =>
      import('./pages/properties-list/properties-list.component').then(
        (m) => m.PropertiesListComponent,
      ),
  },
  {
    path: 'propiedades/:slug',
    loadComponent: () =>
      import('./pages/property-detail/property-detail.component').then(
        (m) => m.PropertyDetailComponent,
      ),
  },
];

