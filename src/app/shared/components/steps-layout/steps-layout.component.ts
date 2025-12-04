import { Component, Input } from '@angular/core';
import { CustomButton } from "../custom-button/custom-button";

@Component({
  selector: 'app-steps-layout',
  imports: [],
  templateUrl: './steps-layout.component.html',
  styleUrl: './steps-layout.component.scss',
})
export class StepsLayoutComponent {
@Input() title: string = '';
@Input() subtitle: string = '';
@Input() totalSteps: number = 0;
@Input() currentStep: number = 0;
 
}
