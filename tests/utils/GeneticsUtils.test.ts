import { GeneticsUtils } from '../../src/utils/GeneticsUtils';
import { Genome } from '../../src/models/Genome';
import { Gene } from '../../src/models/Gene';
import { Allele } from '../../src/models/Allele';
import { DNASequence } from '../../src/models/DNASequence';

describe('GeneticsUtils', () => {
    it('should correctly cross two genomes', () => {
        const allele1 = new Allele('allele1A', new DNASequence('AGTC'), 'Blue');
        const allele2 = new Allele('allele2A', new DNASequence('TCGA'), 'Green');
        const gene1 = new Gene('geneA', [allele1, allele2], 'allele1A');
        const genome1 = new Genome(new Map([['geneA', gene1]]));

        const allele3 = new Allele('allele1B', new DNASequence('CAGT'), 'Red');
        const allele4 = new Allele('allele2B', new DNASequence('GTCA'), 'Yellow');
        const gene2 = new Gene('geneA', [allele3, allele4], 'allele1B');
        const genome2 = new Genome(new Map([['geneA', gene2]]));

        const crossedGenome = GeneticsUtils.crossGenomes(genome1, genome2);
        expect(crossedGenome.genes.get('geneA')?.alleles.length).toBe(2);
    });
});


describe('GeneticsUtils', () => {
    it('should correctly mutate a gene', () => {
        const allele = new Allele('allele1', new DNASequence('AGTC'), 'Blue');
        const gene = new Gene('gene1', [allele], 'allele1');
        const mutatedGene = GeneticsUtils.mutateGene(gene);

        expect(mutatedGene.alleles[0].sequence.sequence).toBe('CTGA');
        expect(mutatedGene.alleles[0].identifier).toContain('_mut');
    });
});
