import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
import { Home } from 'features/home/ui/home';
import { ProductDetail } from 'features/product';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'product/:slug',
    component: ProductDetail
  }
];
