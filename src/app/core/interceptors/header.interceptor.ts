import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);


if (isPlatformBrowser(platformId)&& req.url.includes('fitness.elevateegy.com/api/v1')) {
  
 
  if (localStorage.getItem('token')) {
    
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${localStorage.getItem('token')}`,
      },
    });
     return next(modifiedReq);
  }
}
  return next(req);

};
