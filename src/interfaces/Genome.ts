import { IGene } from "./Gene";

interface IGenome {
    genes: Map<string, IGene>;
    addGene(gene: IGene): void;
    getGene(identifier: string): IGene | null;
}

export { IGenome };
