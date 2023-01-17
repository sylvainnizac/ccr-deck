import { Injectable } from '@angular/core';

import { BaseDeviceService } from './utils/device';

@Injectable({
  providedIn: 'root'
})
export class CcrService extends BaseDeviceService{

  programs_effects: { [name: string]: (value: number, local_this: any)=>void } = {
    "Toolbox": this.Toolbox,
    "Encryption": this.Encryption
  };

  constructor() {
    super()
    this.current_device = this.device
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

}
