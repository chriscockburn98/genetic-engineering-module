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

    constructor(identifier: string, alleles: Allele[]) {
        this.identifier = identifier;
        this.alleles = alleles;
    }

    // Determines the trait based on the alleles
    determineTrait(): any {
        if (this.alleles.length === 2) {
            const [allele1, allele2] = this.alleles;

            // If both alleles are the same, return their trait value
            if (allele1.identifier === allele2.identifier) {
                return allele1.traitValue;
            }

            // Calculate trait based on dominance factors
            if (allele1.dominance > allele2.dominance) {
                return allele1.traitValue;
            } else if (allele2.dominance > allele1.dominance) {
                return allele2.traitValue;
            } else {
                // In case of equal dominance, apply a rule (e.g., codominance)
                return `Mixed: ${allele1.traitValue} and ${allele2.traitValue}`;
            }
        }

        // Default to the trait value of the first allele if only one allele is present
        return this.alleles[0].traitValue;
    }
}
