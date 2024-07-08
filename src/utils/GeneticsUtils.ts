import { Genome } from '../models/Genome';
import { Gene } from '../models/Gene';

export class GeneticsUtils {
    static crossGenomes(genome1: Genome, genome2: Genome): Genome {
        const newGenes = new Map<string, Gene>();
        genome1.genes.forEach((gene1: Gene, key: string) => {
            const gene2 = genome2.genes.get(key);
            if (gene2) {
                const alleles1 = gene1.alleles;
                const alleles2 = gene2.alleles;
                const allele1 = alleles1[Math.floor(Math.random() * alleles1.length)];
                const allele2 = alleles2[Math.floor(Math.random() * alleles2.length)];
                const newGene = new Gene(key, [allele1, allele2]);
                newGenes.set(key, newGene);
            }
        });
        return new Genome(newGenes);
    }

    static breedGenomes(genome1: Genome, genome2: Genome): Genome {
        const offspringGenome = new Map<string, Gene>();

        genome1.genes.forEach((gene, identifier) => {
            const genome2Gene = genome2.getGene(identifier);
            if (genome2Gene) {
                // Simple genetic crossover: randomly select alleles from parents
                const allele1 = gene.alleles[Math.floor(Math.random() * gene.alleles.length)];
                const allele2 = genome2Gene.alleles[Math.floor(Math.random() * genome2Gene.alleles.length)];

                offspringGenome.set(identifier, new Gene(identifier, [allele1, allele2]));
            } else {
                // failed to find a matching gene in genome2, so just copy the gene from genome1
                console.error(`Gene ${identifier} not found in genome2`);



            }
        });

        return new Genome(offspringGenome);
    }

}
