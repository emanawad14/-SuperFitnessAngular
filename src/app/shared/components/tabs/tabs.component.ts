// import { NgClass } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-tabs',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './tabs.component.html',
//   styleUrls: ['./tabs.component.scss'],
// })
// export class TabsComponent {

//   @Input() tabs: { id: string; name: string }[] = [];
//   @Input() activeTab: string = ''; 

//   @Output() tabClick = new EventEmitter<{ id: string; name: string }>();

//   setActiveTab(tab: { id: string; name: string }) {
//     this.tabClick.emit(tab);
//   }
  
// }



import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass, NgFor, CarouselModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  @Input() tabs: { id: string; name: string }[] = [];
  @Input() activeTab: string = '';

  @Output() tabClick = new EventEmitter<{ id: string; name: string }>();

  carouselOptions: OwlOptions = {
    loop: false,
    margin: 20,
    dots: false,
    autoWidth: true,
    nav: true,     
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 19 },
      400: { items: 8 },
      768: { items: 10 },
      1024: { items: 1 }
    }
  };

  setActiveTab(tab: { id: string; name: string }) {
    this.tabClick.emit(tab);
  }
}
