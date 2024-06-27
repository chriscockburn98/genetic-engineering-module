import { Allele } from './Allele';

/**
 * Represents a gene in an organism's genome.
 * 
 * A gene is a sequence of DNA that codes for a specific trait.
 * Some examples of this is:
 * - Eye color
 * - Hair color
 * - Height
 * - Blood type
 * - etc.
 * 
 */
export class Gene {
    identifier: string;
    alleles: Allele[];
    dominantAllele: string;

    constructor(identifier: string, alleles: Allele[], dominantAllele: string) {
        this.identifier = identifier;
        this.alleles = alleles;
        this.dominantAllele = dominantAllele;
    }
}
