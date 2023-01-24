import { Injectable } from '@angular/core';

import { BaseDeviceService } from './utils/device';

@Injectable({
  providedIn: 'root'
})
export class DeckService extends BaseDeviceService{

  programs_effects: { [name: string]: (value: number, local_this: any)=>void } = {
    "Decryption": this.Decryption,
    "Encryption": this.Encryption,
    "SignalScrub": this.SignalScrub,
    "Stealth": this.Stealth,
    "Toolbox": this.Toolbox,
    "VirtualMachine": this.VirtualMachine,
  };

  constructor() {
    super()
    this.current_device = this.device
    this.applyMods()
  }

  swapAttributes(value1: string, value2: string) {
    this.current_device.swapAttributes(value1, value2)
    this.applyMods()
  }

  applyProgramEffect(name: string, value: number){
    if (name != "") {
      if (this.programs_effects[name]) {
        return this.programs_effects[name](value, this);
      }
    
      throw new Error(`Method '${name}' is not implemented.`);
    }
  }

  private Toolbox(value: number, service_this: any) {
    service_this.updateMod("DProc", value)
  }

  private Encryption(value: number, service_this: any) {
    service_this.updateMod("firewall", value)
  }

  private Decryption(value: number, service_this: any) {
    service_this.updateMod("attack", value)
  }

  private Stealth(value: number, service_this: any) {
    service_this.updateMod("sleaze", value)
  }

}
