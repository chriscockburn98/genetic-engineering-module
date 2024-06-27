import { Allele } from '../../src/models/Allele';
import { DNASequence } from '../../src/models/DNASequence';

describe('Allele', () => {
    it('should create an allele with an identifier, DNA sequence, and trait value', () => {
        const dnaSequence = new DNASequence('AGTC');
        const allele = new Allele('allele1', dnaSequence, 'Blue');

        expect(allele.identifier).toBe('allele1');
        expect(allele.sequence).toBe(dnaSequence);
        expect(allele.traitValue).toBe('Blue');
    });
});
