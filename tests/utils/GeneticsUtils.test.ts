import { GeneticsUtils } from '../../src/utils/GeneticsUtils';
import { Genome } from '../../src/models/Genome';
import { Gene } from '../../src/models/Gene';
import { Allele } from '../../src/models/Allele';
import { DNASequence } from '../../src/models/DNASequence';

describe('GeneticsUtils', () => {
    it('should correctly cross two genomes', () => {
        const allele1 = new Allele('allele1A', new DNASequence('AGTC'), 'Blue', 0.3);
        const allele2 = new Allele('allele2A', new DNASequence('TCGA'), 'Green', 0.8);
        const gene1 = new Gene('geneA', [allele1, allele2]);
        const genome1 = new Genome(new Map([['geneA', gene1]]));

        const allele3 = new Allele('allele1B', new DNASequence('CAGT'), 'Red', 0.5);
        const allele4 = new Allele('allele2B', new DNASequence('GTCA'), 'Yellow', 0.6);
        const gene2 = new Gene('geneA', [allele3, allele4]);
        const genome2 = new Genome(new Map([['geneA', gene2]]));

        const crossedGenome = GeneticsUtils.crossGenomes(genome1, genome2);
        expect(crossedGenome.genes.get('geneA')?.alleles.length).toBe(2);
    });
});


describe('GeneticsUtils.breedGenomes', () => {
    it('should create a new genome by combining alleles from two parent genomes', () => {
        const allele1 = new Allele('blue_eyes', new DNASequence('ATCG'), 'Blue', 0.3);
        const allele2 = new Allele('brown_eyes', new DNASequence('TAGC'), 'Brown', 0.8);
        const allele3 = new Allele('green_eyes', new DNASequence('CGTA'), 'Green', 0.5);
        const allele4 = new Allele('hazel_eyes', new DNASequence('GCTA'), 'Hazel', 0.6);

        const gene1 = new Gene('eye_color', [allele1, allele2]);
        const gene2 = new Gene('eye_color', [allele3, allele4]);

        const genome1 = new Genome(new Map([['eye_color', gene1]]));
        const genome2 = new Genome(new Map([['eye_color', gene2]]));

        const offspringGenome = GeneticsUtils.breedGenomes(genome1, genome2);

        expect(offspringGenome).toBeInstanceOf(Genome);
        expect(offspringGenome.genes.size).toBe(1);

        const offspringGene = offspringGenome.getGene('eye_color');
        expect(offspringGene).not.toBeNull();
        if (offspringGene) {
            expect(offspringGene.alleles.length).toBe(2);
            expect([allele1.identifier, allele2.identifier, allele3.identifier, allele4.identifier])
                .toContain(offspringGene.alleles[0].identifier);
            expect([allele1.identifier, allele2.identifier, allele3.identifier, allele4.identifier])
                .toContain(offspringGene.alleles[1].identifier);
        }
    });
});
