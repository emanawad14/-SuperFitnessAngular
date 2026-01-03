import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {



   @Input() type: 'login' | 'signup'|'logout' = 'login'; 
  @Input() text: string = 'Button';  
  @Output() onClickEvent = new EventEmitter<string>(); 
  
  onClick(type: string) {
    this.onClickEvent.emit(type);
   }
}
