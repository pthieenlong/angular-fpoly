import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideIcons } from '@ng-icons/core';

import {
  heroMagnifyingGlass,
  heroChevronDown,
  heroShoppingCart,
  heroUserCircle,
  heroEnvelope,
} from '@ng-icons/heroicons/outline';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideIcons({
      heroChevronDown,
      heroMagnifyingGlass,
      heroShoppingCart,
      heroUserCircle,
      heroEnvelope
    }),
    provideHttpClient(
      withFetch(),
    ),
  ]
};
