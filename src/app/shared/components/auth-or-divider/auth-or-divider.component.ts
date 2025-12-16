import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-auth-or-divider',
  imports: [TranslatePipe],
  templateUrl: './auth-or-divider.component.html',
  styleUrl: './auth-or-divider.component.scss',
})
export class AuthOrDividerComponent {

}
