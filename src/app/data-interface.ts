import { ResultsCharacterInterface, ResultsEpisodeInterface, ResultsLocationInterface } from "./results-interface";
import { InfoInterface } from "./info-interface";

export interface DataCharacterInterface {
    info?: InfoInterface;
    results?: ResultsCharacterInterface[];
    error?: string;
}

export interface DataEpisodeInterface {
    info?: InfoInterface;
    results?: ResultsEpisodeInterface[];
    error?: string;
}

export interface DataLocationInterface {
    info?: InfoInterface;
    results?: ResultsLocationInterface[];
    error?: string;
}