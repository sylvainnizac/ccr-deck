import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  language: string

  constructor(
    private translateConfigService: TranslateConfigService,
    private translateService: TranslateService,
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

}
