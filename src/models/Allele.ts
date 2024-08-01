import { IAllele } from "../interfaces/Allele";

/**
 * Represents an allele with an identifier, DNA sequence, and trait value.
 * 
 * An allele is a variant of a gene that codes for a specific trait.
 * Some examples of this is:
 * - Blue eyes
 * - Brown eyes
 * - Blonde hair
 * - Brown hair
 * - etc.
 */
export class Allele implements IAllele {
    key: string;
    sequence: string;
    traitValue: any; // Replace 'any' with a more specific type as needed
    dominance: number; // Dominance factor, e.g., 0.8

    constructor(key: string, sequence: string, traitValue: any, dominance: number) {
        this.key = key;
        this.sequence = sequence;
        this.traitValue = traitValue;
        this.dominance = dominance;
    }

    toObject() {
        return {
            key: this.key,
            sequence: this.sequence,
            traitValue: this.traitValue,
            dominance: this.dominance,
        };
    }


}
