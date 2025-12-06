import { Component } from '@angular/core';
import { SettingsMetricComponent } from "./settings-metric/settings-metric.component";
import { SettingsItemComponent } from "./settings-item/settings-item.component";

@Component({
  selector: 'app-settings-page',
  imports: [SettingsMetricComponent, SettingsItemComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  
metric(x: any) {
  console.log(x);
}
item(x: any) {
  console.log(x);
}

}
