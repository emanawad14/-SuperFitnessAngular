import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { sign } from 'crypto';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SafeStorage } from '../../../../../projects/shared-utils/src/lib/safe-storage';
import { ThemeManagerService } from '../../../../../projects/shared-utils/src/lib/services/theme-manager.service';
 
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
  // checked=signal<boolean>(false);
    themeVal: boolean = false;

  onValueChange = output<Event>();
  valueChange(e:Event) {
  this.onValueChange.emit(e);

  }

 private readonly _safeStorage=inject(SafeStorage)
 private readonly _themeManagerService=inject(ThemeManagerService)

  ngOnInit(): void {
    this.getUserPrefFromCookies();
    //  this.checked.set(this._safeStorage.get("darkMode")==='true')
  }

  // changeMood(mood:boolean){

  toggleTheme(){
 
    this._themeManagerService.toggleTheme()
  //   if(mood){
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('darkMode','true')
  //   }else{
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('darkMode','false')
  // }

 }
 getUserPrefFromCookies() {
    const theme = this._themeManagerService.getCurrentTheme();
    // const lang = this._themeManagerService.getCurrentLang();

    if (theme == 'dark') {
      this.themeVal = true;
    }

    // if (lang == 'ar') {
    //   this.langVal = true;
    // }
  }
}
