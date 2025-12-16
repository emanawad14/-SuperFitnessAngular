 import { inject, Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';  

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly toastr = inject(ToastrService);
   private readonly options: Partial<IndividualConfig> = {
    timeOut: 3000,
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right'
  };

 
  success(message: string, title: string = 'Successfully') {
    this.toastr.success(message, title, this.options);
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title, this.options);
  }

  warning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title, this.options);
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, this.options);
  }
}
