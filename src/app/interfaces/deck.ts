interface BaseAppareil {
    name: string;
    indice: number;
    TdD: number;
    firewall: number;
    attaque: number;
    corruption: number;
  }
  
export class Appareil implements BaseAppareil {

    name: string;
    indice: number;

    attaque: number;
    corruption: number
    firewall: number;
    TdD: number;

    condition: number
    base_condition: number
    disabled: boolean

    constructor (
        public device: BaseAppareil
        ) {
        this.name = device.name
        this.indice = device.indice

        this.attaque = device.attaque
        this.corruption = device.corruption
        this.firewall = device.firewall
        this.TdD = device.TdD

        this.condition = 8 + (device.indice/2)
        this.base_condition = 8 + (device.indice/2)
        this.disabled = false
    }

    swapAttributes(att1: string, att2: string) {
        if (att1 == att2){
            return
        } else if (["attaque", "corruption"].includes(att1) && ["attaque", "corruption"].includes(att2) ) {
            var buff = this.attaque
            this.attaque = this.corruption
            this.corruption == buff
        } else if (["attaque", "firewall"].includes(att1) && ["attaque", "firewall"].includes(att2) ) {
            var buff = this.attaque
            this.attaque = this.firewall
            this.firewall == buff
        } else if (["attaque", "TdD"].includes(att1) && ["attaque", "TdD"].includes(att2) ) {
            var buff = this.attaque
            this.attaque = this.TdD
            this.TdD == buff
        } else if (["corruption", "firewall"].includes(att1) && ["corruption", "firewall"].includes(att2) ) {
            var buff = this.firewall
            this.firewall = this.corruption
            this.corruption == buff
        } else if (["corruption", "TdD"].includes(att1) && ["corruption", "TdD"].includes(att2) ) {
            var buff = this.TdD
            this.TdD = this.corruption
            this.corruption == buff
        } else if (["firewall", "TdD"].includes(att1) && ["firewall", "TdD"].includes(att2) ) {
            var buff = this.firewall
            this.firewall = this.TdD
            this.TdD == buff
        }
        
    }

    applyMods(attaquemod: number, corruptionmod: number, firewallmod: number, TdDmod: number) {
        this.attaque = this.attaque + attaquemod
        this.corruption = this.corruption + corruptionmod
        this.firewall = this.firewall + firewallmod
        this.TdD = this.TdD + TdDmod
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

}