import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SafeStorage {
   private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  get(key: string): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    if (!this.isBrowser) return;
    localStorage.setItem(key, value);
  }

  remove(key: string): void {
    if (!this.isBrowser) return;
    localStorage.removeItem(key);
  }

  clear(): void {
    if (!this.isBrowser) return;
    localStorage.clear();
  }
}
