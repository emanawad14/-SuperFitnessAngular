import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-settings-metric',
  imports: [],
  templateUrl: './settings-metric.component.html',
  styleUrl: './settings-metric.component.scss',
})
export class SettingsMetricComponent {
title=input("");
  value=input();
  onValueChange = output();
  valueChange() {
    this.onValueChange.emit();
  }
}
