import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { sign } from 'crypto';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-settings-item',
  imports: [ToggleSwitchModule,FormsModule],
  templateUrl: './settings-item.component.html',
  styleUrl: './settings-item.component.scss',
})
export class SettingsItemComponent {
title=input("");
  icon=input("");
  checked=signal<boolean>(false);
  onValueChange = output<Event>();
  valueChange(e:Event) {
  this.onValueChange.emit(e);

  }
}
