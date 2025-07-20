/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

const teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implementation of printTeacher
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe

/******/ })()
;
//# sourceMappingURL=bundle.js.map