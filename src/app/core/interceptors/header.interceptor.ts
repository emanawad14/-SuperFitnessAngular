import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);

  if (
    isPlatformBrowser(platformId) &&
    req.url.includes('fitness.elevateegy.com/api/v1')
  ) {
    const token = localStorage.getItem('token');
    const lang = localStorage.getItem('lang') || 'en'; 

    const modifiedReq = req.clone({
      setHeaders: {
        ...(token && { Authorization: `Bearer ${token}` }),
        'Accept-Language': lang,
      },
    });

    return next(modifiedReq);
  }

  return next(req);
};
