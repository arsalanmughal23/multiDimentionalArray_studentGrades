"use strict";
let students = [
    {
        name: 'Ahmed',
        grades: [60, 50, 40],
    },
    {
        name: 'Asad',
        grades: [85, 98, 32],
    },
    {
        name: 'Junaid',
        grades: [96, 73, 68],
    }
];
let calculateAverageGrade = (student) => {
    var _a, _b;
    let studentGrads = (_a = student.grades) !== null && _a !== void 0 ? _a : [];
    let gradsLength = (_b = studentGrads.length) !== null && _b !== void 0 ? _b : 0;
    let maximumPossibleGrads = gradsLength * 100;
    let obtainedTotalGrads = studentGrads.reduce((acc, item) => { return acc + item; }, 0);
    return obtainedTotalGrads / maximumPossibleGrads * 100;
};
let student = students[0];
displayStudentGrads(student, calculateAverageGrade(student));
let student2 = students[2];
displayStudentGrads(student2, calculateAverageGrade(student2));
function displayStudentGrads(student, avgGrade) {
    console.log({
        name: student.name,
        grades: student.grades,
        averageGrade: avgGrade
    });
}
