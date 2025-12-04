import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-step',
  imports: [NgClass],
  templateUrl: './select-step.component.html',
  styleUrl: './select-step.component.scss',
})
export class SelectStepComponent {
selected = '';
@Input() options: string[] = [];
@Output() selectedChange = new EventEmitter<string>();

setSelected(value: string) {
  this.selected = value;
  this.selectedChange.emit(value);
}


 
}
