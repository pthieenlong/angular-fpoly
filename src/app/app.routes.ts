import { Routes } from '@angular/router';
import { Home } from 'features/home/ui/home';
import { ProductDetail } from 'features/product';
import { Signin } from 'features/signin/ui/signin';
import { Signup } from 'features/signup/ui/signup';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'product/:slug',
    component: ProductDetail
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'signin',
    component: Signin
  },

];
