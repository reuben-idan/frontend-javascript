interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
declare const teacher3: Teacher;
interface Directors extends Teacher {
    numberOfReports: number;
}
declare const director1: Directors;
//# sourceMappingURL=main.d.ts.map