import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NgxSpinnerComponent } from "ngx-spinner";
import { SafeStorage } from '../../projects/shared-utils/src/lib/safe-storage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  implements OnInit{
  protected readonly title = signal('superFitness');

  private readonly flowbiteService=inject(FlowbiteService);
  private readonly _safeStorage=inject(SafeStorage);

 
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    // if(this._safeStorage.get('darkMode')==='true') {
    //      document.documentElement.classList.add('dark');    
    //    }
  }
}
