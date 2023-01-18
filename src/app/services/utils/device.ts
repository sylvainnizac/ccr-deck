import { BehaviorSubject } from 'rxjs';
import { Device } from '../../interfaces/devices';
import Devices from '../../../assets/json/devices.json';

export class BaseDeviceService {
    device = new Device(Devices.temporary[0])
    current_device: Device

    displayed_device = new BehaviorSubject(new Device(Devices.temporary[0]))  
    max_program = new BehaviorSubject(0)
    current_program = new BehaviorSubject(0)
    vm_warning = new BehaviorSubject(false)

    attackmod: number = 0
    sleazemod: number = 0
    firewallmod: number = 0
    DProcmod: number = 0

    setDisplayedDevice(value: Device) {
        this.displayed_device.next(value)
    }

    changeBaseDevice(new_device: Device) {
        this.device = new_device
        this.current_device = this.device
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
        this.applyMods()
      }

    applyMods() {
        var temp_device = this.current_device
        temp_device.applyMods(this.attackmod, this.sleazemod, this.firewallmod, this.DProcmod)
        this.setDisplayedDevice(temp_device)
    }

    updateCondition(value: number) {
        this.current_device.updateCondition(value)
        this.applyMods()
    }

    setMaxProgram(value: number) {
      this.max_program.next(value)
    }
  
    setCurrentProgram(value: number) {
      this.current_program.next(value)
    }

    VirtualMachine(value: number, service_this: any) {
        const new_max_program = service_this.max_program.value + value
        if (new_max_program >= service_this.current_program.value) {
            service_this.max_program.next(new_max_program)
        }

        if (value > 0) {
            service_this.vm_warning.next(true)
        } else {
            service_this.vm_warning.next(false)
        }
    }
}