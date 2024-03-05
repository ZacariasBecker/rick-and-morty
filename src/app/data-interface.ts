import { CharacterInterface } from "./character-interface";
import { InfoInterface } from "./info-interface";

export interface DataInterface {
    info?: InfoInterface;
    results?: CharacterInterface[];
    error?: string;
}
