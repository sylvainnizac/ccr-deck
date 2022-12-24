import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appareil } from '../interfaces/deck';
import Devices from '../../assets/json/devices.json';

@Injectable({
  providedIn: 'root'
})
export class CcrService {

  device = new Appareil(Devices.deck[0])
  current_device: Appareil
  displayed_device = new BehaviorSubject(new Appareil(Devices.deck[0]))

  attaquemod: number = 0
  corruptionmod: number = 0
  firewallmod: number = 0
  TdDmod: number = 0

  constructor() {
    this.current_device = this.device
    this.applyMods()
  }

  private applyMods() {
    var temp_device = this.current_device
    temp_device.applyMods(this.attaquemod, this.corruptionmod, this.firewallmod, this.TdDmod)
    this.setDisplayedDevice(temp_device)
  }

  private setDisplayedDevice(value: Appareil) {
    this.displayed_device.next(value)
  }

  changeBaseDevice(new_device: Appareil) {
    this.device = new_device
    this.current_device = this.device
    this.applyMods()
  }

  swapAttributes(value1: string, value2: string) {
    this.current_device.swapAttributes(value1, value2)
    this.applyMods()
  }

  updateMod(mod_name: string, value: number) {
     if (mod_name == "firewall") {
      this.firewallmod += value
    } else if (mod_name == "TdD") {
      this.TdDmod += value
    }
  }

  updateCondition(value: number) {
    this.current_device.updateCondition(value)
    this.applyMods()
  }
}
