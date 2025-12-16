import { Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-settings-metric',
  imports: [TranslatePipe],
  templateUrl: './settings-metric.component.html',
  styleUrl: './settings-metric.component.scss',
})
export class SettingsMetricComponent {
title=input("");
textLink=input("");
  value=input();
  onValueChange = output();
  valueChange() {
    this.onValueChange.emit();
  }
}
