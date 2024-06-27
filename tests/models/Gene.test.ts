import { Gene } from '../../src/models/Gene';
import { Allele } from '../../src/models/Allele';
import { DNASequence } from '../../src/models/DNASequence';

describe('Gene', () => {
    it('should create a gene with identifier, alleles, and a dominant allele', () => {
        const allele1 = new Allele('allele1', new DNASequence('AGTC'), 'trait1');
        const allele2 = new Allele('allele2', new DNASequence('TCGA'), 'trait2');
        const gene = new Gene('gene1', [allele1, allele2], 'allele1');

        expect(gene.identifier).toBe('gene1');
        expect(gene.alleles.length).toBe(2);
        expect(gene.dominantAllele).toBe('allele1');
    });
});
