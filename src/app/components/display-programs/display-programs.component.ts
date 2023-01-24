import { Component, Input, OnInit } from '@angular/core';

import { Program } from '../../interfaces/program';
import { CcrService } from '../../services/ccr.service';
import { DeckService } from '../../services/deck.service';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-display-programs',
  templateUrl: './display-programs.component.html',
  styleUrls: ['./display-programs.component.scss'],
})
export class DisplayProgramsComponent implements OnInit {

  @Input() programs?: Program[];
  @Input() headers?: string[];
  @Input() title?: string
  @Input() page?: string
  max_program: number = 0
  current_program: number = 0

  language: string

  ngOnInit() {
    if (this.page == "deck") {
      this.deckService.max_program.subscribe(data => this.max_program = data)
      this.deckService.current_program.subscribe(data => this.current_program = data)
    } else if (this.page == "ccr") {
      this.ccrService.max_program.subscribe(data => this.max_program = data)
      this.ccrService.current_program.subscribe(data => this.current_program = data)
    } 
  }

  constructor(
    private ccrService: CcrService,
    private deckService: DeckService,
    private translateConfigService: TranslateConfigService
    ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  setActive(e: any, updater: string, value: number) {
    if (this.page == "deck") {
      this.setActiveProgramDeck(e, updater, value)
    } else if (this.page == "ccr") {
      this.setActiveProgramCcr(e, updater, value)
    }
  }

  setActiveProgramCcr(e: any, updater: string, value: number) {
    if (e.detail.checked && this.current_program < this.max_program){
      this.ccrService.setCurrentProgram(this.current_program +=1)
      this.ccrService.applyProgramEffect(updater, value)
    } else if (!e.detail.checked) {
      this.ccrService.setCurrentProgram(this.current_program -=1)
      this.ccrService.applyProgramEffect(updater, -value)
    }
  }

  setActiveProgramDeck(e: any, updater: string, value: number) {
    if (e.detail.checked && this.current_program < this.max_program){
      this.deckService.setCurrentProgram(this.current_program +=1)
      this.deckService.applyProgramEffect(updater, value)
    } else if (!e.detail.checked) {
      this.deckService.setCurrentProgram(this.current_program -=1)
      this.deckService.applyProgramEffect(updater, -value)
    }
  }

}
