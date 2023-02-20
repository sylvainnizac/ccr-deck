interface BaseCharacter {
    id: number;
    name: string;
  }
  
export class Character implements BaseCharacter {

    id: number;
    name: string;

    constructor (
        public device: BaseCharacter
        ) {
            this.id = device.id
            this.name = device.name
    }


}