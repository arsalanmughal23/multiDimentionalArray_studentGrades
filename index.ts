type TYPE_STUDENT = {
    name: string,
    grades: number[]
}

let students:[TYPE_STUDENT, TYPE_STUDENT, TYPE_STUDENT] = [
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

let calculateAverageGrade = (student:TYPE_STUDENT):number => {
    let studentGrads = student.grades ?? [];
    let gradsLength = studentGrads.length ?? 0;
    let maximumPossibleGrads = gradsLength * 100;
    let obtainedTotalGrads = studentGrads.reduce((acc, item) => { return acc + item }, 0);

    return obtainedTotalGrads / maximumPossibleGrads * 100;
}

let student = students[0];
displayStudentGrads(student, calculateAverageGrade(student));

let student2 = students[2];
displayStudentGrads(student2, calculateAverageGrade(student2));

function displayStudentGrads(student:TYPE_STUDENT, avgGrade:number) {
    console.log({
        name: student.name,
        grades: student.grades,
        averageGrade: avgGrade
    });
}
