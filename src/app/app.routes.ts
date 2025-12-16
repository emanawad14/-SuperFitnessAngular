import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/auth/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/auth/layouts/main-layout/main-layout.component';

export const routes: Routes = [

  /* ================= Main Layout ================= */
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

      /* ✅ لو لسه محتاجاه */
      {
        path: 'classId/:id',
        loadComponent: () =>
          import('./features/classes/classes.component')
            .then(c => c.ClassesComponent),
        title: 'Class By Id'
      },

      {
        path: 'details-meals/:id',
        loadComponent: () =>
          import('./features/meals-details/meals-details.component')
            .then(c => c.MealsDetailsComponent),
        title: 'Meal Details'
      },

      /* ✅ Route جاي من main */
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings-page/settings-page.component')
            .then(c => c.SettingsPageComponent),
        title: 'Settings'
      }
    ]
  },

  /* ================= Auth Layout ================= */
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

  /* ================= Fallback ================= */
  {
    path: '**',
    redirectTo: ''
  }
];
