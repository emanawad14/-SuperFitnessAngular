import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/auth/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { OtpComponent } from './core/auth/otp/otp.component';
import { ForgetPasswordComponent } from './core/auth/forget-password/forget-password.component';
import { NewPasswordComponent } from './core/auth/new-password/new-password.component';
import { MainLayoutComponent } from './core/auth/layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { SettingsPageComponent } from './features/settings-page/settings-page.component';

export const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 🔹 Main Layout (Home + Lazy pages)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'Home page' },

      { 
        path: '', 
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
        title: 'Home'
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.component').then((c) => c.AboutComponent),
        title: 'About'
      },

      {
        path: 'classes',
        loadComponent: () =>
          import('./features/workouts/workouts.component').then((c) => c.WorkoutsComponent),
        title: 'Classes'
      },

      {
        path: 'healthy',
        loadComponent: () =>
          import('./features/healthy/healthy.component').then((c) => c.HealthyComponent),
        title: 'Healthy'
      },

      {
        path: 'classId/:id',
        loadComponent: () =>
          import('./features/classes/classes.component').then((c) => c.ClassesComponent),
        title: 'classId'
      },
      {
        path: 'settings', component:SettingsPageComponent , title: 'Settings Page'
      }
    ]
  },

  // 🔹 Auth Layout (Authentication Pages)
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Login page' },
      { path: 'register', component: RegisterComponent, title: 'Register page' },
      { path: 'verify-otp', component: OtpComponent, title: 'OTP page' },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
        title: 'forgetPassword page'
      },
      {
        path: 'reset-password',
        component: NewPasswordComponent,
        title: 'resetPassword page'
      }
    ]
  }
];
