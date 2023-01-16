import { Component, Input, OnInit } from '@angular/core';

import { Program } from '../interfaces/program';
import { CcrService } from '../services/ccr.service';
import { DeckService } from '../services/deck.service';
import { ProgramsService } from '../services/programs.service';
import { TranslateConfigService } from '../services/translate-config.service';

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
      this.programService.max_program_deck.subscribe(data => this.max_program = data)
      this.programService.current_program_deck.subscribe(data => this.current_program = data)
    } else if (this.page == "ccr") {
      this.programService.max_program_ccr.subscribe(data => this.max_program = data)
      this.programService.current_program_ccr.subscribe(data => this.current_program = data)
    } 
  }

  constructor(
    private ccrService: CcrService,
    private deckService: DeckService,
    private programService: ProgramsService,
    private translateConfigService: TranslateConfigService
    ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  setActive(e: any, updater: string) {
    if (this.page == "deck") {
      this.setActiveProgramDeck(e, updater)
    } else if (this.page == "ccr") {
      this.setActiveProgramCcr(e, updater)
    }
  }

  setActiveProgramCcr(e: any, updater: string) {
    if (e.detail.checked && this.current_program < this.max_program){
      this.programService.setCurrentProgramCcr(this.current_program +=1)
      this.ccrService.applyProgramEffect(updater, 1)
    } else if (!e.detail.checked) {
      this.programService.setCurrentProgramCcr(this.current_program -=1)
      this.ccrService.applyProgramEffect(updater, -1)
    }
  }

  setActiveProgramDeck(e: any, updater: string) {
    if (e.detail.checked && this.current_program < this.max_program){
      this.programService.setCurrentProgramDeck(this.current_program +=1)
      this.deckService.applyProgramEffect(updater, 1)
    } else if (!e.detail.checked) {
      this.programService.setCurrentProgramDeck(this.current_program -=1)
      this.deckService.applyProgramEffect(updater, -1)
    }
  }

}
