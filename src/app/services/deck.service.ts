import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../interfaces/devices';
import Devices from '../../assets/json/devices.json';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  device = new Device(Devices.temporary[0])
  current_device: Device
  displayed_device = new BehaviorSubject(new Device(Devices.temporary[0]))

  attackmod: number = 0
  sleazemod: number = 0
  firewallmod: number = 0
  DProcmod: number = 0

  constructor() {
    this.current_device = this.device
    this.applyMods()
  }

  private applyMods() {
    var temp_device = this.current_device
    temp_device.applyMods(this.attackmod, this.sleazemod, this.firewallmod, this.DProcmod)
    this.setDisplayedDevice(temp_device)
  }

  private setDisplayedDevice(value: Device) {
    this.displayed_device.next(value)
  }

  changeBaseDevice(new_device: Device) {
    this.device = new_device
    this.current_device = this.device
    this.applyMods()
  }

  swapAttributes(value1: string, value2: string) {
    this.current_device.swapAttributes(value1, value2)
    this.applyMods()
  }

  updateMod(mod_name: string, value: number) {
    if (mod_name == "attack") {
      this.attackmod += value
    } else if (mod_name == "sleaze") {
      this.sleazemod += value
    } else if (mod_name == "firewall") {
      this.firewallmod += value
    } else if (mod_name == "DProc") {
      this.DProcmod += value
    }
  }

  updateCondition(value: number) {
    this.current_device.updateCondition(value)
    this.applyMods()
  }

}
