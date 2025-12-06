import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
 import { FormLayoutComponent } from "../../../shared/components/form-layout/form-layout.component";
import { AuthOrDividerComponent } from "../../../shared/components/auth-or-divider/auth-or-divider.component";
import { SocialButtonsComponent } from "../../../shared/components/social-buttons/social-buttons.component";
import { CustomButton } from "../../../shared/components/custom-button/custom-button";
import { CustomInput } from "../../../shared/components/custom-input/custom-input";
import { AuthWrapper } from "../../../shared/components/auth-wrapper/auth-wrapper";
import { StepsLayoutComponent } from "../../../shared/components/steps-layout/steps-layout.component";
   import { MetricStepComponent } from "../../../shared/components/steps-layout/metric-step/metric-step.component";
import { SelectStepComponent } from "../../../shared/components/steps-layout/select-step/select-step.component";
import { GenderStepComponent } from "../../../shared/components/steps-layout/gender-step/gender-step.component";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
 import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../../projects/auth/src/lib/auth.service';
import { ToastService } from '../../../../../projects/shared-utils/src/lib/toast.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  imports: [FormLayoutComponent, AuthOrDividerComponent, SocialButtonsComponent, CustomButton, CustomInput, AuthWrapper, StepsLayoutComponent, MetricStepComponent, SelectStepComponent, GenderStepComponent,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  currentStep = 0
  totalSteps = 6
  age = signal(25)
  weight = signal(60)
  height = signal(170)
  registerForm!: FormGroup;
  apiError: string = '';
  isloading:boolean=false
   

  private readonly _fb=inject(FormBuilder)
  private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
  private readonly _toastr=inject(ToastService)
  private readonly _router=inject(Router)

 
  ngOnInit(): void {
    
     this.registerFormFun()
    
  }

  registerFormFun(){
    this.registerForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]],
      gender:[null],
      height:[170],
      weight:[60],
      age:[25],
      goal:[null],
      activityLevel:[null],
       
    },   { validators: this.matchPasswordsValidator }
);
 
  }


matchPasswordsValidator(form:AbstractControl){ // for matching password
     
      const pass=form.get("password")?.value;
      const repass=form.get("rePassword")?.value;
      if (pass===repass) {
        return null
      }else {return{misMatch:true}}  // return mismath in error of api instead of null
 
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isloading=true
      this._authService.register(this.registerForm.value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (response) => {
          console.log(response);
          this._toastr.success("Registration Successful","Welcome Aboard!")
          this._router.navigate(['/login'])

        },
        error: (error) => {
            
         this.isloading=false
   
                  
         },
        complete: () => {
          this.isloading=false
          

        }
      })
      } else {
      this.registerForm.markAllAsTouched();
    }
  }


  incrementStep() {
    this.currentStep++
       
 
  }
  onGenderSelected(value: string) {
    this.registerForm.patchValue({ gender: value });
   }
onAgeChange(value: number) {
   this.registerForm.patchValue({ age: value });
 }
onWeightChange(value: number) {
 
  this.registerForm.patchValue({ weight: value });
}
onHeightChange(value: number) {
 
  this.registerForm.patchValue({ height: value });  
}
onGoalSelected(value: string) {
  this.registerForm.patchValue({ goal: value });
 }
onActivitySelected(value: string) {
  this.registerForm.patchValue({ activityLevel: value });
 }
}
