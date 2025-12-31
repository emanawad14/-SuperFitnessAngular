import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {

   @Input() image: string = '';
  @Input() title: string = '';
  @Input() actionText: string = 'Explore';
  @Input() icon: string = 'fa-solid fa-up-right-from-square';

  @Input() routerLink: string | any[] = '';

}
