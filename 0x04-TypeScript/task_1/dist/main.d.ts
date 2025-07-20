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
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
declare const printTeacher: printTeacherFunction;
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
declare class StudentClass implements StudentClassInterface {
    private firstName;
    private lastName;
    constructor(firstName: string, lastName: string);
    workOnHomework(): string;
    displayName(): string;
}
declare const student: StudentClass;
//# sourceMappingURL=main.d.ts.map