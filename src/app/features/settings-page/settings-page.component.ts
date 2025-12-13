import { Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SettingsMetricComponent } from "./settings-metric/settings-metric.component";
import { SettingsItemComponent } from "./settings-item/settings-item.component";
import { DialogModule } from 'primeng/dialog';
import { SelectStepComponent } from "../../shared/components/steps-layout/select-step/select-step.component";
import { MetricStepComponent } from "../../shared/components/steps-layout/metric-step/metric-step.component";
import { CustomButton } from "../../shared/components/custom-button/custom-button";
import { StepsLayoutComponent } from "../../shared/components/steps-layout/steps-layout.component";
import { CustomInput } from "../../shared/components/custom-input/custom-input";
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { LoginResponse, User } from '../../../../projects/auth/src/interfaces/login.interface';
 import { AuthService } from '../../../../projects/auth/src/lib/auth.service';
import { ToastService } from '../../../../projects/shared-utils/src/lib/toast.service';
import { Router } from '@angular/router';
import { EditProfile } from '../../../../projects/auth/src/interfaces/editProfile.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MytranslateService } from '../../../../projects/shared-utils/src/lib/mytranslate.service';
import { TranslatePipe } from '@ngx-translate/core';
import { SafeStorage } from '../../../../projects/shared-utils/src/lib/safe-storage';
import { finalize } from 'rxjs';
 
@Component({
  selector: 'app-settings-page',
  imports: [SettingsMetricComponent, SettingsItemComponent, DialogModule, SelectStepComponent, MetricStepComponent, CustomButton, CustomInput, SelectButton, FormsModule,ReactiveFormsModule,TranslatePipe],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent implements OnInit {

   private readonly _fb=inject(FormBuilder)
  private readonly _authService=inject(AuthService)
  private readonly _destroyRef=inject(DestroyRef)
  private readonly _router=inject(Router)
  private readonly _toastr=inject(ToastService)
  private readonly _translate=inject(MytranslateService)
  private readonly _safeStorage=inject(SafeStorage)

  
 type = signal<"weight" | "level" | "goal" |"pass" |"lang"|"mood">("weight");
 
  user=signal<User>(JSON.parse(this._safeStorage.get('user')!))
  weight:WritableSignal<number>=signal(this.user().weight)
  level:WritableSignal<string>=signal(this.user().activityLevel)
  goal:WritableSignal<string>=signal(this.user().goal)


 visible: boolean = false;
  
langValue = 'en';
moodValue = 'light';
  changePasswordForm!: FormGroup;
   isloading=signal<boolean>(false)
   disabled=signal<boolean>(false)

   

 



ngOnInit(): void {
  this.changePasswordForm = this._fb.group({
       password: ['', [Validators.required, Validators.minLength(6)]],
       newPassword: ['', [Validators.required]],
      
       
    } 
);
    
  }

showDialog() {
       
        this.visible = true;
}
changePassword(){
    this.isloading.set(true)
    this.disabled.set(true)
    this._authService.changePassword(this.changePasswordForm.value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
      next: (response) => {
        this._toastr.success("Password changed successfully")
        this.visible = false;
        this.isloading.set(false)
       this.disabled.set(false)
       this._router.navigate(['/login'])
      },
      error: (error) => {
         this.isloading.set(false)
       this.disabled.set(false)
      },
      complete: () => {
     
      }
    })
 
}

changeMetricValue(value:EditProfile) {
    this.isloading.set(true)
    this.disabled.set(true)
    this._authService.editProfile(value).pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
      next: (response) => {
 
        localStorage.setItem('user',JSON.stringify(response.user))
        this._toastr.success(`${this.type()} updated successfully`,"Successful")
        this.visible = false;
       this.isloading.set(false)
       this.disabled.set(false)
      },
      error: (error) => {
         this.isloading.set(false)
       this.disabled.set(false)
      },
      complete: () => {
     
      }
    })

     
}

changeLanguage(lang:string){
  this._translate.changeLanguage(lang)
}
changeMood(mood:string){
  if(mood==='dark'){
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode','true')
  }else if(mood==='light'){
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode','false')
  }
 }

 
logout() {
  this._authService.logout()
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      finalize(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
      })
    )
    .subscribe({
      next: () => {},
      error: () => {},
    });
}



 
 

}
