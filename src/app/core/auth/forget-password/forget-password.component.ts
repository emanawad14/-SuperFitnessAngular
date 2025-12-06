import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AuthWrapper } from "../../../shared/components/auth-wrapper/auth-wrapper";
import { FormLayoutComponent } from "../../../shared/components/form-layout/form-layout.component";
import { CustomInput } from "../../../shared/components/custom-input/custom-input";
import { CustomButton } from "../../../shared/components/custom-button/custom-button";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
 import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../../projects/auth/src/lib/auth.service';
import { ToastService } from '../../../../../projects/shared-utils/src/lib/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [AuthWrapper, FormLayoutComponent, CustomInput, CustomButton, ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword!: FormGroup;
  isloading:boolean=false

  private readonly _fb=inject(FormBuilder)
  private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
  private readonly _toastr=inject(ToastService)
  private readonly _router=inject(Router)



 
  ngOnInit(): void {
    
     
    this.forgetPassword = this._fb.group({
       email: ['', [Validators.required, Validators.email]],
        
    } 
);
 
  }

 


 

  OnSubmit() {
    if (this.forgetPassword.valid) {
      this.isloading=true
      this._authService.forgotPassword(this.forgetPassword.value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (response) => {

           this._toastr.success(" OTP sent to your email","Successful")
            
            this._router.navigate(['/verify-otp'])

        },
        error: (error) => {

          this._toastr.error(error.error.error) 
         this.isloading=false
   
                  
         },
        complete: () => {
          this.isloading=false
          

        }
      })
      } else {
      this.forgetPassword.markAllAsTouched();
    }
  }

 
}

