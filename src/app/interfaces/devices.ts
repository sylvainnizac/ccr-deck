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

    base_attack: number;
    base_sleaze: number
    base_firewall: number;
    base_DProc: number;
    base_noise_reduction: number
    base_condition: number

    attack: number;
    sleaze: number
    firewall: number;
    DProc: number;
    noise_reduction: number
    condition: number

    disabled: boolean
    
    detailed_noise_reduction: { [name: string]: number } = {};

    constructor (
        public device: BaseDevice
        ) {
        this.name = device.name
        this.rating = device.rating

        this.base_attack = device.attack
        this.base_sleaze = device.sleaze
        this.base_firewall = device.firewall
        this.base_DProc = device.DProc
        this.base_noise_reduction = 0
        this.base_condition = 8 + Math.ceil(device.rating/2)

        this.attack = device.attack
        this.sleaze = device.sleaze
        this.firewall = device.firewall
        this.DProc = device.DProc
        this.noise_reduction = 0
        this.condition = 8 + Math.ceil(device.rating/2)

        this.disabled = false

        
    }

    swapAttributes(att1: string, att2: string) {
        if (att1 == att2){
            return
        } else if (["attack", "sleaze"].includes(att1) && ["attack", "sleaze"].includes(att2) ) {
            var buff = this.base_attack
            this.base_attack = this.base_sleaze
            this.base_sleaze = buff
        } else if (["attack", "firewall"].includes(att1) && ["attack", "firewall"].includes(att2) ) {
            var buff = this.base_attack
            this.base_attack = this.base_firewall
            this.base_firewall = buff
        } else if (["attack", "DProc"].includes(att1) && ["attack", "DProc"].includes(att2) ) {
            var buff = this.base_attack
            this.base_attack = this.base_DProc
            this.base_DProc = buff
        } else if (["sleaze", "firewall"].includes(att1) && ["sleaze", "firewall"].includes(att2) ) {
            var buff = this.base_firewall
            this.base_firewall = this.base_sleaze
            this.base_sleaze = buff
        } else if (["sleaze", "DProc"].includes(att1) && ["sleaze", "DProc"].includes(att2) ) {
            var buff = this.base_DProc
            this.base_DProc = this.base_sleaze
            this.base_sleaze = buff
        } else if (["firewall", "DProc"].includes(att1) && ["firewall", "DProc"].includes(att2) ) {
            var buff = this.base_firewall
            this.base_firewall = this.base_DProc
            this.base_DProc = buff
        }
        
    }

    applyMods(attackmod: number, sleazemod: number, firewallmod: number, DProcmod: number) {
        this.attack = this.base_attack + attackmod
        this.sleaze = this.base_sleaze + sleazemod
        this.firewall = this.base_firewall + firewallmod
        this.DProc = this.base_DProc + DProcmod
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

    updateNoiseReduction(key: string, value: number) {
        this.detailed_noise_reduction[key] += value

        if (this.detailed_noise_reduction[key] > 0) {
            this.detailed_noise_reduction[key] = 0
        }

        this.noise_reduction = 0
        for (let k in this.detailed_noise_reduction) {
            this.noise_reduction += this.detailed_noise_reduction[key]
        }
    }

}