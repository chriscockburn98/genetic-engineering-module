import { GeneticsUtils } from '../../src/utils/GeneticsUtils';
import { Genome } from '../../src/models/Genome';
import { Gene } from '../../src/models/Gene';
import { Allele } from '../../src/models/Allele';

describe('GeneticsUtils.breedGenomes', () => {
    it('should create a new genome by combining alleles from two parent genomes', () => {
        const allele1 = new Allele('blue_eyes', 'ATCG', 'Blue', 0.3, 'parent1');
        const allele2 = new Allele('brown_eyes', 'TAGC', 'Brown', 0.8, 'parent1');
        const allele3 = new Allele('green_eyes', 'CGTA', 'Green', 0.5, 'parent2');
        const allele4 = new Allele('hazel_eyes', 'GCTA', 'Hazel', 0.6, 'parent2');

        const gene1 = new Gene('eye_color', [allele1, allele2]);
        const gene2 = new Gene('eye_color', [allele3, allele4]);

        const parent1 = new Genome('parent1', new Map([['eye_color', gene1]]));
        const parent2 = new Genome('parent2', new Map([['eye_color', gene2]]));

        const offspring = GeneticsUtils.breedGenomes(parent1, parent2);

        expect(offspring).toBeInstanceOf(Genome);
        expect(offspring.genes.size).toBe(1);

        const offspringGene = offspring.getGene('eye_color');
        expect(offspringGene).not.toBeNull();
        if (offspringGene) {
            expect(offspringGene.alleles.length).toBe(2);
            expect([allele1.key, allele2.key, allele3.key, allele4.key])
                .toContain(offspringGene.alleles[0].key);
            expect([allele1.key, allele2.key, allele3.key, allele4.key])
                .toContain(offspringGene.alleles[1].key);
        }
    });
});

describe('GeneticsUtils.breedGenomes', () => {
    it('should create a new genome by combining alleles from two parent genomes', () => {
        const eyeAllele1 = new Allele('blue_eyes', 'ATCG', 'Blue', 0.3, 'parent1');
        const eyeAllele2 = new Allele('brown_eyes', 'TAGC', 'Brown', 0.8, 'parent1');
        const eyeAllele3 = new Allele('green_eyes', 'CGTA', 'Green', 0.5, 'parent2');
        const eyeAllele4 = new Allele('hazel_eyes', 'GCTA', 'Hazel', 0.6, 'parent2');

        const hairAllele1 = new Allele('blue_hair', 'ATCG', 'Blue', 0.3, 'parent1');
        const hairAllele2 = new Allele('brown_hair', 'TAGC', 'Brown', 0.8, 'parent1');
        const hairAllele3 = new Allele('green_hair', 'CGTA', 'Green', 0.5, 'parent2');
        const hairAllele4 = new Allele('hazel_hair', 'GCTA', 'Hazel', 0.6, 'parent2');

        const eyeGene1 = new Gene('eye_color', [eyeAllele1, eyeAllele2]);
        const eyeGene2 = new Gene('eye_color', [eyeAllele3, eyeAllele4]);

        const hairGene1 = new Gene('eye_color', [hairAllele1, hairAllele2]);
        const hairGene2 = new Gene('eye_color', [hairAllele3, hairAllele4]);

        const parent1 = new Genome('parent1', new Map([['eye_color', eyeGene1], ['hair_color', hairGene1]]));
        const parent2 = new Genome('parent2', new Map([['eye_color', eyeGene2], ['hair_color', hairGene2]]));

        const offspringGenome = GeneticsUtils.breedGenomes(parent1, parent2);

        // const c = GeneticsUtils.convertGenomeToDocument(offspringGenome);


        expect(offspringGenome).toBeInstanceOf(Genome);
        expect(offspringGenome.genes.size).toBe(2);

        const offspringGene = offspringGenome.getGene('eye_color');
        expect(offspringGene).not.toBeNull();
        if (offspringGene) {
            // console.log({
            //     parent_1_eye_color: genome1.getGene('eye_color'),
            //     parent_2_eye_color: genome2.getGene('eye_color'),
            //     parent_1_hair_color: genome1.getGene('hair_color'),
            //     parent_2_hair_color: genome2.getGene('hair_color'),
            //     offspring_eye_color: offspringGenome.getGene('eye_color'),
            //     offspring_hair_color: offspringGenome.getGene('hair_color')
            // })
            expect(offspringGene.alleles.length).toBe(2);
            expect([eyeAllele1.key, eyeAllele2.key, eyeAllele3.key, eyeAllele4.key])
                .toContain(offspringGene.alleles[0].key);
            expect([eyeAllele1.key, eyeAllele2.key, eyeAllele3.key, eyeAllele4.key])
                .toContain(offspringGene.alleles[1].key);
        }
    });
});


describe('GeneticsUtils.breedGenomes', () => {
    it('should handle incomplete dominance for color traits and random selection for non-color traits', () => {
        const eyeAllele1 = new Allele('blue_eyes', 'ATCG', '#0000FF', 0.5, 'parent1');
        const eyeAllele2 = new Allele('brown_eyes', 'TAGC', '#8B4513', 0.5, 'parent1');
        const eyeAllele3 = new Allele('green_eyes', 'CGTA', '#008000', 0.8, 'parent2');
        const eyeAllele4 = new Allele('hazel_eyes', 'GCTA', '#A52A2A', 0.3, 'parent2');
        const speedAllele1 = new Allele('fast', 'ATCG', 'fast', 0.5, 'parent1');
        const speedAllele2 = new Allele('slow', 'TAGC', 'slow', 0.5, 'parent2');

        const eyeGene1 = new Gene('eye_color', [eyeAllele1, eyeAllele2]);
        const eyeGene2 = new Gene('eye_color', [eyeAllele3, eyeAllele4]);
        const speedGene1 = new Gene('speed', [speedAllele1, speedAllele2]);

        const parent1 = new Genome('parent1', new Map([['eye_color', eyeGene1], ['speed', speedGene1]]));
        const parent2 = new Genome('parent2', new Map([['eye_color', eyeGene2], ['speed', speedGene1]]));

        const offspringGenome = GeneticsUtils.breedGenomes(parent1, parent2);

        const offspringEyeTrait = offspringGenome.getGene('eye_color')?.determineTrait();
        const offspringSpeedTrait = offspringGenome.getGene('speed')?.determineTrait();

        console.log('Offspring Eye Color:', offspringEyeTrait);
        console.log('Offspring Speed:', offspringSpeedTrait);

        expect(offspringEyeTrait).toMatch(/^#[0-9A-Fa-f]{6}$/); // Check if it's a valid hex color
        expect(['fast', 'slow']).toContain(offspringSpeedTrait); // Check if it's one of the possible speed traits
    });
});
