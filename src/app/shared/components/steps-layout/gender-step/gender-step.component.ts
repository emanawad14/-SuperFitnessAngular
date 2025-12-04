import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender-step',
  imports: [NgClass],
  templateUrl: './gender-step.component.html',
  styleUrl: './gender-step.component.scss',
})
export class GenderStepComponent {
selectedGender: 'male' | 'female' | null = null;
@Output() genderChange = new EventEmitter<'male' | 'female'>();

selectGender(value: 'male' | 'female') {
  this.selectedGender = value;
  this.genderChange.emit(value);
 
}

}
