import { IGenome } from '../interfaces/Genome';
import { Gene } from './Gene';

/**
 * Represents an organism's genome.
 * 
 * A genome is the complete set of genes or genetic material present in a cell or organism.
 * Some examples of this are:
 * - Human genome
 * - Dog genome
 * - Cat genome
 * - etc.
 * 
 */
export class Genome implements IGenome {
    genes: Map<string, Gene>;

    constructor(genes: Map<string, Gene>) {
        this.genes = genes;
    }

    addGene(gene: Gene) {
        this.genes.set(gene.key, gene);
    }

    getGene(key: string): Gene | null {
        return this.genes.get(key) || null;
    }

    toObject() {
        const genesObject: any = {};
        this.genes.forEach((gene, key) => {
            genesObject[key] = gene.toObject();
        });
        return { genes: genesObject };
    }
}
