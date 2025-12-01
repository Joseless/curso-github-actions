import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/propiedades" class="text-2xl font-bold text-blue-600">
              Property Sales
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <a
              routerLink="/propiedades"
              routerLinkActive="text-blue-600"
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Propiedades
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}

