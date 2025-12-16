 import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SafeStorage } from './safe-storage';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private renderer2=inject(RendererFactory2).createRenderer(null, null); 
  private readonly _safeStorage=inject(SafeStorage);

  constructor( private translateService: TranslateService) {

         this.translateService.setDefaultLang('en');
        const savedLang = this._safeStorage.get('lang');
        if (savedLang) {
          this.translateService.use(savedLang);
        }
        this.changeDirection();
   
     
  }

  changeDirection(lang?:string):void {
    if(this._safeStorage.get("lang")==="en"){
      this.renderer2.setAttribute(document.documentElement, 'dir', 'ltr'); 
      this.renderer2.setAttribute(document.documentElement, 'lang', 'en'); 
    }else if(this._safeStorage.get("lang")==="ar"){
      this.renderer2.setAttribute(document.documentElement, 'dir', 'rtl');
      this.renderer2.setAttribute(document.documentElement, 'lang', 'ar'); 
    }
  }
  changeLanguage(lang: string): void {
    if(!lang) return;
    this.translateService.use(lang);
    this._safeStorage.set('lang', lang);
    this.changeDirection(lang);
  }
}
