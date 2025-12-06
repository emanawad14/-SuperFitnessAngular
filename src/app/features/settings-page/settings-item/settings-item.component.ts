import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-settings-item',
  imports: [],
  templateUrl: './settings-item.component.html',
  styleUrl: './settings-item.component.scss',
})
export class SettingsItemComponent {
title=input("");
  icon=input("");
  onValueChange = output<Event>();
  valueChange(e:Event) {
    this.onValueChange.emit(e);
  }
}
