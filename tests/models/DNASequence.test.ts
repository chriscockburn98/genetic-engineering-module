import { DNASequence } from '../../src/models/DNASequence';

describe('DNASequence', () => {
    it('should create a DNA sequence with specified nucleotide sequence', () => {
        const sequence = new DNASequence('AGTC');
        expect(sequence.sequence).toBe('AGTC');
    });
});