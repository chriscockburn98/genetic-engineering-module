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
    key: string;
    alleles: Allele[];

    constructor(key: string, alleles: Allele[]) {
        this.key = key;
        this.alleles = alleles;
    }

    determineTrait(): { traitValue: any, parentId?: string } {
        if (this.alleles.length === 2) {
            const [allele1, allele2] = this.alleles;

            // If both alleles are the same, return their trait value
            if (allele1.key === allele2.key) {
                // randomly select parent
                const randomParent = Math.random() < 0.5 ? allele1 : allele2;
                return { traitValue: randomParent.traitValue, parentId: randomParent.parentId };
            }

            // Calculate trait based on dominance factors
            if (allele1.dominance > allele2.dominance) {
                return { traitValue: allele1.traitValue, parentId: allele1.parentId };
            } else if (allele2.dominance > allele1.dominance) {
                return { traitValue: allele2.traitValue, parentId: allele2.parentId };
            } else {
                // In case of equal dominance, apply incomplete dominance or random selection
                if (this.isColorTrait(allele1.traitValue) && this.isColorTrait(allele2.traitValue)) {
                    return { traitValue: this.blendColors(allele1.traitValue, allele2.traitValue) };
                } else {
                    return Math.random() < 0.5 ? { traitValue: allele1.traitValue, parentId: allele1.parentId } : { traitValue: allele2.traitValue, parentId: allele1.parentId };
                }
            }
        }

        // Default to the trait value of the first allele if only one allele is present
        return { traitValue: this.alleles[0].traitValue, parentId: this.alleles[0].parentId };
    }

    private isColorTrait(traitValue: any): boolean {
        return typeof traitValue === 'string' && traitValue.startsWith('#');
    }

    private blendColors(color1: string, color2: string): string {
        const hexToDecimal = (hex: string) => parseInt(hex.slice(1), 16);
        const decimalToHex = (decimal: number) => decimal.toString(16).padStart(6, '0');

        const color1Dec = hexToDecimal(color1);
        const color2Dec = hexToDecimal(color2);

        const r = ((color1Dec >> 16) + (color2Dec >> 16)) / 2;
        const g = (((color1Dec >> 8) & 0x00FF) + ((color2Dec >> 8) & 0x00FF)) / 2;
        const b = ((color1Dec & 0x0000FF) + (color2Dec & 0x0000FF)) / 2;

        return `#${decimalToHex((r << 16) | (g << 8) | b)}`;
    }

    toObject() {
        return {
            key: this.key,
            alleles: this.alleles.map(allele => allele.toObject()),
        };
    }

}
