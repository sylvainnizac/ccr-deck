import { Category } from "./action";
import { Program } from "./program";

export interface DataStruct {
    categories?: Category[];
    programs?: Program[];
    hacking_programs?: Program[];
  }
  
export class Data implements DataStruct {
  
    constructor (public categories?: Category[], public programs?: Program[], public hacking_programs?: Program[]) {
    }
}

export interface Enumeration {
  id: number
  value: string
}

