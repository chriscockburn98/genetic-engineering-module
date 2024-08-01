import { Gene } from '../../src/models/Gene';
import { Allele } from '../../src/models/Allele';

describe('Gene', () => {
    it('should create a gene with identifier, alleles, and a dominant allele', () => {
        const allele1 = new Allele('allele1', 'AGTC', 'trait1', 0.5);
        const allele2 = new Allele('allele2', 'TCGA', 'trait2', 0.5);
        const gene = new Gene('gene1', [allele1, allele2]);

        expect(gene.key).toBe('gene1');
        expect(gene.alleles.length).toBe(2);
        expect(gene.alleles).toContain(allele1);
    });
});
