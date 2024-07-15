// index.d.ts
export function calculateGCContent(dna: string): number;
export function transcribeDNAtoRNA(dna: string): string;
export function simulatePCR(dna: string, primer1: string, primer2: string): string;
export function mutateDNA(dna: string, mutationRate: number): string;

export class DNASequence {
    sequence: string;
    constructor(sequence: string);
    toString(): string;
}

export class Allele {
    identifier: string;
    sequence: DNASequence;
    traitValue: any;
    dominance: number;
    constructor(identifier: string, sequence: DNASequence, traitValue: any, dominance: number);
}

export class Gene {
    identifier: string;
    alleles: Allele[];
    constructor(identifier: string, alleles: Allele[]);
    determineTrait(): any;
}

export class Genome {
    genes: Map<string, Gene>;
    constructor(genes: Map<string, Gene>);
    addGene(gene: Gene): void;
    getGene(identifier: string): Gene | null;
}
