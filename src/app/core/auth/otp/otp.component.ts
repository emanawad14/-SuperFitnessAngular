import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AuthWrapper } from "../../../shared/components/auth-wrapper/auth-wrapper";
import { FormLayoutComponent } from "../../../shared/components/form-layout/form-layout.component";
import { InputOtpModule } from 'primeng/inputotp';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomButton } from "../../../shared/components/custom-button/custom-button";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
 import { AuthService } from '../../../../../projects/auth/src/lib/auth.service';
import { ToastService } from '../../../../../projects/shared-utils/src/lib/toast.service';
import { Router } from '@angular/router';
import { verifyOtp } from '../../../../../projects/auth/src/interfaces/password.interface';
import { verify } from 'crypto';
  
@Component({
  standalone: true,
  selector: 'app-otp',
  imports: [AuthWrapper, FormLayoutComponent, InputOtpModule, FormsModule, CustomButton,ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
})
export class OtpComponent  {
  value:string='';
  verifyOtp!:verifyOtp
  isloading:boolean=false

   private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
  private readonly _toastr=inject(ToastService)
  private readonly _router=inject(Router)

  OnSubmit() {
    
     
      this.isloading=true
      this.verifyOtp={resetCode:this.value}
      this._authService.verifyOtp(this.verifyOtp).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (response) => {
          console.log(response);
           this._toastr.success(" OTP verified","Successful")
            
            this._router.navigate(['/reset-password'])

        },
        error: (error) => {
          console.log(error);
          this._toastr.error(error.error.error)
           
         this.isloading=false
   
                  
         },
        complete: () => {
          this.isloading=false
          

        }
      })
      }  
  }

