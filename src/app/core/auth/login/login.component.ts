import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AuthWrapper } from "../../../shared/components/auth-wrapper/auth-wrapper";
import { FormLayoutComponent } from "../../../shared/components/form-layout/form-layout.component";
import { CustomInput } from "../../../shared/components/custom-input/custom-input";
import { CustomButton } from "../../../shared/components/custom-button/custom-button";
import { SocialButtonsComponent } from "../../../shared/components/social-buttons/social-buttons.component";
import { AuthOrDividerComponent } from "../../../shared/components/auth-or-divider/auth-or-divider.component";
import { FormGroup, FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
 import{ AuthService }from '../../../../../projects/auth/src/lib/auth.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ToastService } from '../../../../../projects/shared-utils/src/lib/toast.service';
import { throws } from 'assert';
@Component({
  selector: 'app-login',
  imports: [AuthWrapper, FormLayoutComponent, CustomInput, CustomButton, SocialButtonsComponent, AuthOrDividerComponent, ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  isloading:boolean=false

  private readonly _fb=inject(FormBuilder)
  private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
   private readonly _router=inject(Router)
   private readonly _toastr=inject(ToastService)



 
  ngOnInit(): void {
    
     
    this.login = this._fb.group({
       email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
       
    } 
);
 
  }

 


 

  onSubmit() {
    console.log(this.login);
    if (this.login.valid) {
      this.isloading=true
      this._authService.login(this.login.value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (response) => {
          console.log(response);
           this._toastr.success("Login Successful")
           localStorage.setItem('token',response.token)
           
            this._router.navigate(['/home'])

        },
        error: (error) => {
            this.isloading=false
   
                  
         },
        complete: () => {
          this.isloading=false
          

        }
      })
      } else {
      this.login.markAllAsTouched();
    }
  }
}
