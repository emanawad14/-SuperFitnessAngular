import { HttpInterceptorFn } from "@angular/common/http";
import { inject, PLATFORM_ID } from "@angular/core";
import { finalize } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { isPlatformBrowser } from "@angular/common";


let activeRequests = 0;
let spinnerTimeout: any;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  const platformId = inject(PLATFORM_ID);

   if (!isPlatformBrowser(platformId)) {
    return next(req);
  }

  activeRequests++;


  if (!spinnerTimeout) {
    spinnerTimeout = setTimeout(() => {
      spinner.show();
    }, 100); 
  }

  return next(req).pipe(
    finalize(() => {
      activeRequests--;

      if (activeRequests === 0) {
        
        setTimeout(() => {
          spinner.hide();
          clearTimeout(spinnerTimeout);
          spinnerTimeout = null;
        }, 200);
      }
    })
  );
};
