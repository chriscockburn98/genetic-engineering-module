import { DNASequence } from './DNASequence';

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
export class Allele {
    identifier: string;
    sequence: DNASequence;
    traitValue: any; // Replace 'any' with a more specific type as needed
    dominance: number; // Dominance factor, e.g., 0.8

    constructor(identifier: string, sequence: DNASequence, traitValue: any, dominance: number) {
        this.identifier = identifier;
        this.sequence = sequence;
        this.traitValue = traitValue;
        this.dominance = dominance;
    }
}
