interface BaseDevice {
    name: string;
    rating: number;
    DProc: number;
    firewall: number;
    attack: number;
    sleaze: number;
  }
  
export class Device implements BaseDevice {

    name: string;
    rating: number;

    attack: number;
    sleaze: number
    firewall: number;
    DProc: number;

    condition: number
    base_condition: number
    disabled: boolean

    noise_reduction: number

    constructor (
        public device: BaseDevice
        ) {
        this.name = device.name
        this.rating = device.rating

        this.attack = device.attack
        this.sleaze = device.sleaze
        this.firewall = device.firewall
        this.DProc = device.DProc

        this.condition = 8 + Math.ceil(device.rating/2)
        this.base_condition = 8 + Math.ceil(device.rating/2)
        this.disabled = false

        this.noise_reduction = 0
    }

    swapAttributes(att1: string, att2: string) {
        if (att1 == att2){
            return
        } else if (["attack", "sleaze"].includes(att1) && ["attack", "sleaze"].includes(att2) ) {
            var buff = this.attack
            this.attack = this.sleaze
            this.sleaze = buff
        } else if (["attack", "firewall"].includes(att1) && ["attack", "firewall"].includes(att2) ) {
            var buff = this.attack
            this.attack = this.firewall
            this.firewall = buff
        } else if (["attack", "DProc"].includes(att1) && ["attack", "DProc"].includes(att2) ) {
            var buff = this.attack
            this.attack = this.DProc
            this.DProc = buff
        } else if (["sleaze", "firewall"].includes(att1) && ["sleaze", "firewall"].includes(att2) ) {
            var buff = this.firewall
            this.firewall = this.sleaze
            this.sleaze = buff
        } else if (["sleaze", "DProc"].includes(att1) && ["sleaze", "DProc"].includes(att2) ) {
            var buff = this.DProc
            this.DProc = this.sleaze
            this.sleaze = buff
        } else if (["firewall", "DProc"].includes(att1) && ["firewall", "DProc"].includes(att2) ) {
            var buff = this.firewall
            this.firewall = this.DProc
            this.DProc = buff
        }
        
    }

    applyMods(attackmod: number, sleazemod: number, firewallmod: number, DProcmod: number) {
        this.attack = this.attack + attackmod
        this.sleaze = this.sleaze + sleazemod
        this.firewall = this.firewall + firewallmod
        this.DProc = this.DProc + DProcmod
      }

    updateCondition(value: number) {
        this.condition ? this.condition += value : this.condition = 0

        if (this.condition <= 0){
            this.disabled = true
        } else {
            this.disabled = false
        }

        if (this.condition > this.base_condition) {
            this.condition = this.base_condition
        }
    }

    updateNoiseReduction(value: number) {
        this.noise_reduction += value

        if (this.noise_reduction > 0) {
            this.noise_reduction = 0
        }
    }

}