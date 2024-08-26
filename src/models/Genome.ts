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
    id: any;
    genes: Map<string, Gene>;

    constructor(id: any, genes: Map<string, Gene>) {
        this.id = id;
        this.genes = genes;
    }

    addGene(gene: Gene) {
        this.genes.set(gene.key, gene);
    }

    getGene(key: string): Gene | null {
        return this.genes.get(key) || null;
    }

    toArray() {
        return Array.from(this.genes.values()).map(gene => gene.toObject());
    }
}
