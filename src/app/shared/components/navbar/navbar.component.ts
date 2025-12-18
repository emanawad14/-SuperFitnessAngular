import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../../../../../projects/auth/src/lib/auth.service';
 
@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterLink, RouterLinkActive, TranslatePipe, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {

  


   mobileMenuOpen = false;
   isloggedIn=signal(false);
    private readonly _authService=inject(AuthService)
    private readonly _router=inject(Router)



   ngOnInit(): void {
    this._authService.loadLoggedUser().subscribe({
      next: (res) => {
      this.isloggedIn.set(!!res);
      } ,
      error: (err) => {
        this.isloggedIn.set(false);
      }
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigate(type:string){
    if(type==='login'){
      this._router.navigate(['login']);
    }else if(type==='signup'){
      this._router.navigate(['register']);
    }
    else if(type==='logout'){
      this._authService.logout().subscribe({
        next:(res)=>{
          this.isloggedIn.set(false);
          this._router.navigate(['']);
           localStorage.removeItem('token');
           localStorage.removeItem('user');
        }
      })
    }
   }

}
