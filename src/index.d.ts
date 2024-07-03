// index.d.ts
export function calculateGCContent(dna: string): number;
export function transcribeDNAtoRNA(dna: string): string;
export function simulatePCR(dna: string, primer1: string, primer2: string): string;
export function mutateDNA(dna: string, mutationRate: number): string;
