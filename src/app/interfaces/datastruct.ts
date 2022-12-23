import { Category } from "./action";
import { Program } from "./program";

export interface DataStruct {
    readonly actionsHeaders: String[];
    readonly programsHeaders: String[];
    categories?: Category[];
    programs?: Program[];
    hacking_programs?: Program[];
  }
  
export class Data implements DataStruct {
    actionsHeaders = ["", "mark", "test", "limite", "type", "page"]
    programsHeaders = ["active", "installed", "name", "page", "description"]
  
    constructor (public categories?: Category[], public programs?: Program[], public hacking_programs?: Program[]) {
    }
}