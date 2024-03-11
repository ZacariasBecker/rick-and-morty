import { CharacterInterface } from "./results-character-interface";
import { InfoInterface } from "./info-interface";

export interface DataInterface {
    info?: InfoInterface;
    results?: CharacterInterface[];
    error?: string;
}
