import { IAllele } from "./Allele";

interface IGene {
    key: string;
    alleles: IAllele[];
    determineTrait(): { traitValue: any, parentId?: string };
    toObject(): any;
}

export { IGene };