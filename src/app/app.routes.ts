import { Routes } from '@angular/router';

export const routes: Routes =
 [

     {path:'',loadComponent:()=>import('./features/home/home.component').then((c)=>c.HomeComponent)
        ,title:'Home'
    },

     {path:'about',loadComponent:()=>import('./features/about/about.component').
        then((c)=>c.AboutComponent)
        ,title:'About'
    },
    {path:'classes',loadComponent:()=>import('./features/workouts/workouts.component').
        then((c)=>c.WorkoutsComponent)
        ,title:'Classes'
    },
    {path:'healthy',loadComponent:()=>import('./features/healthy/healthy.component').
        then((c)=>c.HealthyComponent)
        ,title:'Healthy'
    },
     {path:'classId/:id',loadComponent:()=>import('./features/classes/classes.component').
        then((c)=>c.ClassesComponent)
        ,title:'classId'
    },

    {path:'login',loadComponent:()=>import('./core/auth/login/login.component').then((c)=>c.LoginComponent)
        ,title:'Login'
    },
    
    {path:'register',loadComponent:()=>import('./core/auth/register/register.component').
        then((c)=>c.RegisterComponent)
        ,title:'Register'
    },
   
   
    
   
    



];
