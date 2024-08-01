import { IGene } from '../interfaces/Gene';
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
export class Gene implements IGene {
    identifier: string;
    alleles: Allele[];

    constructor(identifier: string, alleles: Allele[]) {
        this.identifier = identifier;
        this.alleles = alleles;
    }

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
                // In case of equal dominance, apply incomplete dominance or random selection
                if (this.isColorTrait(allele1.traitValue) && this.isColorTrait(allele2.traitValue)) {
                    return this.blendColors(allele1.traitValue, allele2.traitValue);
                } else {
                    return Math.random() < 0.5 ? allele1.traitValue : allele2.traitValue;
                }
            }
        }

        // Default to the trait value of the first allele if only one allele is present
        return this.alleles[0].traitValue;
    }

    isColorTrait(traitValue: any): boolean {
        return typeof traitValue === 'string' && traitValue.startsWith('#');
    }

    blendColors(color1: string, color2: string): string {
        const hexToDecimal = (hex: string) => parseInt(hex.slice(1), 16);
        const decimalToHex = (decimal: number) => decimal.toString(16).padStart(6, '0');

        const color1Dec = hexToDecimal(color1);
        const color2Dec = hexToDecimal(color2);

        const r = ((color1Dec >> 16) + (color2Dec >> 16)) / 2;
        const g = (((color1Dec >> 8) & 0x00FF) + ((color2Dec >> 8) & 0x00FF)) / 2;
        const b = ((color1Dec & 0x0000FF) + (color2Dec & 0x0000FF)) / 2;

        return `#${decimalToHex((r << 16) | (g << 8) | b)}`;
    }
}
