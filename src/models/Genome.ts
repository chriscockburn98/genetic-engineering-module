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
export class Genome {
    genes: Map<string, Gene>;

    constructor(genes: Map<string, Gene>) {
        this.genes = genes;
    }

    addGene(gene: Gene) {
        this.genes.set(gene.identifier, gene);
    }

    getGene(identifier: string): Gene | null {
        return this.genes.get(identifier) || null;
    }
}
