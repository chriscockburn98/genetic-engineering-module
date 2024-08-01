interface IAllele {
    key: string;
    sequence: string;
    traitValue: any;
    dominance: number;
    toObject(): any;
}

export { IAllele };
