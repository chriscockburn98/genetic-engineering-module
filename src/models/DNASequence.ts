
/**
 * Represents a DNA sequence.
 * 
 * A DNA sequence is a sequence of nucleotides that make up a gene.
 * Some examples of nucleotides are:
 * - Adenine (A)
 * - Thymine (T)
 * - Guanine (G)
 * - Cytosine (C)
 * 
 * Future work: We would like to experiment with more complex DNA sequences.
 */
export class DNASequence {
    sequence: string;

    constructor(sequence: string) {
        this.sequence = sequence;
    }
}
