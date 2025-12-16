import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { sign } from 'crypto';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SafeStorage } from '../../../../../projects/shared-utils/src/lib/safe-storage';

@Component({
  selector: 'app-settings-item',
  imports: [ToggleSwitchModule,FormsModule],
  templateUrl: './settings-item.component.html',
  styleUrl: './settings-item.component.scss',
})
export class SettingsItemComponent implements OnInit {
title=input("");
  icon=input("");
  type=input("");
  checked=signal<boolean>(false);
  onValueChange = output<Event>();
  valueChange(e:Event) {
  this.onValueChange.emit(e);

  }

 private readonly _safeStorage=inject(SafeStorage)

  ngOnInit(): void {
     this.checked.set(this._safeStorage.get("darkMode")==='true')
  }

  changeMood(mood:boolean){
    if(mood){
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode','true')
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode','false')
  }
 }
}
