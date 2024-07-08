import { Genome } from '../../src/models/Genome';
import { Gene } from '../../src/models/Gene';

describe('Genome', () => {
    let genome: Genome;
    let geneA: Gene;
    let geneB: Gene;

    beforeEach(() => {
        geneA = new Gene('geneA', []);
        geneB = new Gene('geneB', []);
        const genes = new Map<string, Gene>();
        genes.set(geneA.identifier, geneA);
        genes.set(geneB.identifier, geneB);
        genome = new Genome(genes);
    });

    test('should return the correct gene by identifier', () => {
        expect(genome.getGene('geneA')).toBe(geneA);
        expect(genome.getGene('geneB')).toBe(geneB);
    });

    test('should return null if gene is not found', () => {
        expect(genome.getGene('geneC')).toBeNull();
    });
});
