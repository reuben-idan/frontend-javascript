/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Create two student objects
const student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
const student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};
// Create array containing the two students
const studentsList = [student1, student2];
// Function to render the table
function renderTable() {
    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.maxWidth = "600px";
    table.style.margin = "20px auto";
    table.style.border = "1px solid #ddd";
    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    firstNameHeader.textContent = "First Name";
    firstNameHeader.style.padding = "12px";
    firstNameHeader.style.textAlign = "left";
    firstNameHeader.style.backgroundColor = "#f2f2f2";
    firstNameHeader.style.border = "1px solid #ddd";
    const locationHeader = document.createElement("th");
    locationHeader.textContent = "Location";
    locationHeader.style.padding = "12px";
    locationHeader.style.textAlign = "left";
    locationHeader.style.backgroundColor = "#f2f2f2";
    locationHeader.style.border = "1px solid #ddd";
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    // Create table body
    const tbody = document.createElement("tbody");
    // Iterate through students and create rows
    studentsList.forEach((student) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.padding = "12px";
        firstNameCell.style.border = "1px solid #ddd";
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        locationCell.style.padding = "12px";
        locationCell.style.border = "1px solid #ddd";
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    // Append table to document body
    document.body.appendChild(table);
}
// Call the render function when DOM is loaded
document.addEventListener("DOMContentLoaded", renderTable);

/******/ })()
;
//# sourceMappingURL=bundle.js.map