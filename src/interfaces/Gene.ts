import { IAllele } from "./Allele";

interface IGene {
    identifier: string;
    alleles: IAllele[];
    determineTrait(): any;
}

export { IGene };