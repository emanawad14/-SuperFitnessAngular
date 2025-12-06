import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AuthWrapper } from "../../../shared/components/auth-wrapper/auth-wrapper";
import { FormLayoutComponent } from "../../../shared/components/form-layout/form-layout.component";
import { CustomInput } from "../../../shared/components/custom-input/custom-input";
import { CustomButton } from "../../../shared/components/custom-button/custom-button";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
 import { AuthService } from '../../../../../projects/auth/src/lib/auth.service';
import { ToastService } from '../../../../../projects/shared-utils/src/lib/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [AuthWrapper, FormLayoutComponent, CustomInput, CustomButton, FormsModule,ReactiveFormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
})
export class NewPasswordComponent implements OnInit {
  resetPassword!: FormGroup;
  isloading:boolean=false

  private readonly _fb=inject(FormBuilder)
  private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
   private readonly _router=inject(Router)
   private readonly _toastr=inject(ToastService)



 
  ngOnInit(): void {
    
     
    this.resetPassword = this._fb.group({
       email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
       
    } 
);
 
  }

  
  OnSubmit() {
     if (this.resetPassword.valid) {
      this.isloading=true
      this._authService.resetPassword(this.resetPassword.value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (response) => {
          console.log(response);
           this._toastr.success("Password Reset Successful")
           localStorage.setItem('token',response.token)
          
            this._router.navigate(['/'])

        },
        error: (error) => {
          
           this.isloading=false
   
                  
         },
        complete: () => {
          this.isloading=false
          

        }
      })
      } else {
      this.resetPassword.markAllAsTouched();
    }
  }
}
