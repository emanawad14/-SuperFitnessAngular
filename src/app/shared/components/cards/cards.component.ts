import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {

   @Input() image: string = '';
  @Input() title: string = '';
  @Input() actionText: string = 'Explore';
  @Input() icon: string = 'fa-solid fa-up-right-from-square';

}
