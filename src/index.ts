// index.ts
export * from './models/DNASequence';
export * from './models/Allele'
export * from './models/Gene';
export * from './models/Genome';

// Export utility functions
export { calculateGCContent, transcribeDNAtoRNA, simulatePCR, mutateDNA } from './utils/utils';
