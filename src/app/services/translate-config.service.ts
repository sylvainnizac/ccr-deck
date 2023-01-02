import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  currentLang: string;

  constructor(
    private translate: TranslateService,
  ) {
    this.currentLang = localStorage.getItem('lang');
  }

  getDefaultLanguage() {
    if (this.currentLang) {
      this.translate.setDefaultLang(this.currentLang)
    } else {
      localStorage.setItem('lang', this.translate.getBrowserLang())
      this.currentLang = this.translate.getBrowserLang()
      this.translate.setDefaultLang(this.currentLang)
    }

    return this.currentLang
  }

  setLanguage(setLang: string) {
    this.translate.use(setLang)
    localStorage.setItem('lang', setLang)
  }

  getCurrentLang() {
    return localStorage.getItem('lang')
  }
}
