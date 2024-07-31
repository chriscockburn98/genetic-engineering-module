// index.ts
export * from './models/Allele'
export * from './models/Gene';
export * from './models/Genome';

// Export utility functions
export { calculateGCContent, transcribeDNAtoRNA, simulatePCR, mutateDNA } from './utils/utils';

export * from './utils/GeneticsUtils';
