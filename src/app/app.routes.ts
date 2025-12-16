import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/auth/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { OtpComponent } from './core/auth/otp/otp.component';
import { ForgetPasswordComponent } from './core/auth/forget-password/forget-password.component';
import { NewPasswordComponent } from './core/auth/new-password/new-password.component';
import { MainLayoutComponent } from './core/auth/layouts/main-layout/main-layout.component';
 
 
 
export const routes: Routes = [

 
  {
    path: '',
    component: MainLayoutComponent,
     children: [

      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component')
            .then(c => c.HomeComponent),
        title: 'Home'
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.component')
            .then(c => c.AboutComponent),
        title: 'About'
      },

      {
        path: 'classes',
        loadComponent: () =>
          import('./features/workouts/workouts.component')
            .then(c => c.WorkoutsComponent),
        title: 'Classes'
      },

      {
        path: 'classes/:id',
        loadComponent: () =>
          import('./features/classes/classes.component')
            .then(c => c.ClassesComponent),
        title: 'Class Details'
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings-page/settings-page.component')
            .then(c => c.SettingsPageComponent),
        title: 'Settings'
      }
    ]
  },

 
  {
    path: '',
    component: AuthLayoutComponent,
     children: [

      {
        path: 'login',
        loadComponent: () =>
          import('./core/auth/login/login.component')
            .then(c => c.LoginComponent),
        title: 'Login'
      },

      {
        path: 'register',
        loadComponent: () =>
          import('./core/auth/register/register.component')
            .then(c => c.RegisterComponent),
        title: 'Register'
      },

      {
        path: 'verify-otp',
        loadComponent: () =>
          import('./core/auth/otp/otp.component')
            .then(c => c.OtpComponent),
        title: 'Verify OTP'
      },

      {
        path: 'forget-password',
        loadComponent: () =>
          import('./core/auth/forget-password/forget-password.component')
            .then(c => c.ForgetPasswordComponent),
        title: 'Forget Password'
      },

      {
        path: 'reset-password',
        loadComponent: () =>
          import('./core/auth/new-password/new-password.component')
            .then(c => c.NewPasswordComponent),
        title: 'Reset Password'
      }
    ]
  },

   
  {
    path: '**',
    redirectTo: ''
  }
];


