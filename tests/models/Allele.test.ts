import { Allele } from '../../src/models/Allele';

describe('Allele', () => {
    it('should create an allele with an identifier, DNA sequence, and trait value', () => {
        const dnaSequence = 'AGTC';
        const allele = new Allele('allele1', dnaSequence, 'Blue', 0.5);

        expect(allele.identifier).toBe('allele1');
        expect(allele.sequence).toBe(dnaSequence);
        expect(allele.traitValue).toBe('Blue');
    });
});
