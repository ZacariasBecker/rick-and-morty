import { ResultsCharacterInterface } from "./results-character-interface";
import { InfoInterface } from "./info-interface";

export interface DataInterface {
    info?: InfoInterface;
    results?: ResultsCharacterInterface[];
    error?: string;
}
