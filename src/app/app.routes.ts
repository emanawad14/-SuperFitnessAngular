import { Routes } from '@angular/router';

export const routes: Routes =
 [

     {path:'',loadComponent:()=>import('./features/home/home.component').then((c)=>c.HomeComponent)
        ,title:'Home'
    },
    {path:'login',loadComponent:()=>import('./core/auth/login/login.component').then((c)=>c.LoginComponent)
        ,title:'Login'
    },
    
    {path:'register',loadComponent:()=>import('./core/auth/register/register.component').
        then((c)=>c.RegisterComponent)
        ,title:'Register'
    }



];
