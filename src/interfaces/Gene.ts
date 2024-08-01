import { IAllele } from "./Allele";

interface IGene {
    key: string;
    alleles: IAllele[];
    determineTrait(): any;
    toObject(): any;
}

export { IGene };