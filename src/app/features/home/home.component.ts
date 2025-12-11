import { Component } from '@angular/core';
import { WhyusComponent } from "../whyus/whyus.component";
import { AboutComponent } from "../about/about.component";
import { WorkoutsComponent } from "../workouts/workouts.component";
import { HealthyComponent } from "../healthy/healthy.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ChatComponent } from "../../shared/components/chat/chat.component";
import { HomehealthyComponent } from "../homehealthy/homehealthy.component";


@Component({
  selector: 'app-home',
  imports: [WhyusComponent, AboutComponent, WorkoutsComponent, SliderComponent, ButtonComponent, ChatComponent, HomehealthyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
