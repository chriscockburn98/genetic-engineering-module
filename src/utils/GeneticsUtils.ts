import { Genome } from '../models/Genome';
import { Gene } from '../models/Gene';
import { Allele } from '../models/Allele';
import { DNASequence } from '../models/DNASequence';

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
                const newGene = new Gene(key, [allele1, allele2], allele1.identifier);
                newGenes.set(key, newGene);
            }
        });
        return new Genome(newGenes);
    }

    static mutateGene(gene: Gene): Gene {
        // Select a random allele to mutate
        const randomIndex = Math.floor(Math.random() * gene.alleles.length);
        const alleleToMutate = gene.alleles[randomIndex];
        // Create a mutation by reversing the DNA sequence as a simple mutation
        const mutatedSequence = alleleToMutate.sequence.sequence.split('').reverse().join('');
        const mutatedAllele = new Allele(alleleToMutate.identifier + "_mut", new DNASequence(mutatedSequence), alleleToMutate.traitValue);
        // Replace the original allele with the mutated one
        const newAlleles = gene.alleles.map(a => a.identifier === alleleToMutate.identifier ? mutatedAllele : a);
        return new Gene(gene.identifier, newAlleles, gene.dominantAllele);
    }
}
