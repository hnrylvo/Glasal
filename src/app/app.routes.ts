import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'productos',
    loadComponent: () => {
      return import('./products/products.component').then(
        (m) => m.ProductsComponent
      );
    },
  },
  {
    path: 'servicios',
    loadComponent: () => {
      return import('./services/services.component').then(
        (m) => m.ServicesComponent
      );
    },
  },
  {
    path: 'contacto',
    loadComponent: () => {
      return import('./contact/contact.component').then(
        (m) => m.ContactComponent
      );
    },
  },
  {
    path: 'cotizar',
    loadComponent: () => {
      return import('./get-quote/get-quote.component').then(
        (m) => m.GetQuoteComponent
      );
    },
  },
];
