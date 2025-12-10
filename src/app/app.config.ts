import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ المهم
import { provideToastr } from 'ngx-toastr';
 import { errorInterceptor } from '../../projects/shared-utils/src/lib/error.interceptor';
import { loadingInterceptor } from '../../projects/shared-utils/src/lib/loading.interceptor';
import { headerInterceptor } from './core/interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(),withInterceptors([errorInterceptor,loadingInterceptor,headerInterceptor])),
    provideRouter(routes),
     provideClientHydration(withEventReplay()),
     provideAnimations(),
    provideToastr(),
 
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ]
};
