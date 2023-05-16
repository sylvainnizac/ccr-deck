interface BaseCharacter {
    id: number;
    name: string;
  }
  
export class Character implements BaseCharacter {

    id: number;
    name: string;

    constructor (
        public character: BaseCharacter
        ) {
            this.id = character.id
            this.name = character.name
    }


}