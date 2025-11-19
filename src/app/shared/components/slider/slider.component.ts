import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {

customOptions: OwlOptions = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,

  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }  
  },

  margin: 10, 
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
};

}
