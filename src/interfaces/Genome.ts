import { IGene } from "./Gene";

interface IGenome {
    genes: Map<string, IGene>;
    addGene(gene: IGene): void;
    getGene(key: string): IGene | null;
    toObject(): any;
}

export { IGenome };
