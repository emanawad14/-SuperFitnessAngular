import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ المهم
import { provideToastr } from 'ngx-toastr';
 import { errorInterceptor } from '../../projects/shared-utils/src/lib/error.interceptor';
import { loadingInterceptor } from '../../projects/shared-utils/src/lib/loading.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import {  BASE_URL1, BASE_URL2 } from '../../projects/auth/src/base/token';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

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
        }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    { provide:BASE_URL1,useValue:environment.baseUrl1 },
    { provide:BASE_URL2,useValue:environment.baseUrl2 }


  ]
};
