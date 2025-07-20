// Brand convention & Nominal typing
// sumMajorCredits function
export function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: "major",
    };
}
// sumMinorCredits function
export function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: "minor",
    };
}
//# sourceMappingURL=main.js.map