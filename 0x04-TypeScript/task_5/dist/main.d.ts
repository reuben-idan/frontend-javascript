export interface MajorCredits {
    credits: number;
    _majorBrand: "major";
}
export interface MinorCredits {
    credits: number;
    _minorBrand: "minor";
}
export declare function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits;
export declare function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits;
//# sourceMappingURL=main.d.ts.map