import { Component } from '@angular/core';
import { WhyusComponent } from "../whyus/whyus.component";
import { AboutComponent } from "../about/about.component";
import { WorkoutsComponent } from "../workouts/workouts.component";
import { HealthyComponent } from "../healthy/healthy.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [WhyusComponent, AboutComponent, WorkoutsComponent, HealthyComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
