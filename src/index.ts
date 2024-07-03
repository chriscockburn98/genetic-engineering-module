/**
 * Calculates the GC content (percentage) of a DNA sequence.
 */
function calculateGCContent(dna: string): number {
	const gcCount = (dna.match(/[gc]/gi) || []).length;
	return (gcCount / dna.length) * 100;
}

/**
 * Transcribes DNA sequence to RNA (replacing all thymine 'T' with uracil 'U').
 */
function transcribeDNAtoRNA(dna: string): string {
	return dna.replace(/T/g, 'U');
}

/**
 * Simulates a Polymerase Chain Reaction (PCR) by amplifying DNA between primers.
 */
function simulatePCR(dna: string, primer1: string, primer2: string): string {
	const start = dna.indexOf(primer1) + primer1.length;
	const end = dna.indexOf(primer2, start);
	return dna.substring(start, end);
}

/**
 * Randomly mutates a DNA sequence at a specified mutation rate (probability).
 */
function mutateDNA(dna: string, mutationRate: number): string {
	return dna.split('').map(nucleotide => Math.random() < mutationRate ? mutateNucleotide(nucleotide) : nucleotide).join('');
}

function mutateNucleotide(nucleotide: string): string {
	const bases = ['A', 'T', 'C', 'G'];
	let newBase = bases[Math.floor(Math.random() * bases.length)];
	while (newBase === nucleotide) { // Ensure new nucleotide is different
		newBase = bases[Math.floor(Math.random() * bases.length)];
	}
	return newBase;
}

module.exports = {
	calculateGCContent,
	transcribeDNAtoRNA,
	simulatePCR,
	mutateDNA
};
