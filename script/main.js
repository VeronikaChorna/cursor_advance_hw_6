// const user = {
//     name: 'Nika',
//     age: 22,
//     'last  name': 'Chorna',
//     'job title': 'QC',
// };


// user.fullName = 'Nika Chorna';

// console.log(user['last  name']);

// for (let key in user) {
//     console.log(user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

// -----------------------------------------------------------------------------------------------------------------
function getSubjects(student) {
    let subjects = Object.keys(student.subjects);
    subjects.forEach((ele, idx, arr) => arr[idx] = ele.replace('_', ' '));
    subjects.forEach((ele, idx, arr) => arr[idx] = ele.charAt(0).toUpperCase() + ele.slice(1));
    return subjects;
}
console.log('1. A list of subjects for a specific student:', getSubjects(students[0]));

// -----------------------------------------------------------------------------------------------------------------
function getAverageMark(student) {
    let marks = Object.values(student.subjects);
    marks = marks.flat();
    let sum = 0;
        for (const value of marks) {
            sum += value;
        }
    const avgMakrs = (sum / marks.length).toFixed(2);
    return avgMakrs;
}
console.log('2. The average marks of all subjects for a particular student:', getAverageMark(students[2]));

// -----------------------------------------------------------------------------------------------------------------
function getStudentInfo(student) {
    const cloneStudent = structuredClone(student);
    cloneStudent.averageMark = getAverageMark(cloneStudent);
    delete cloneStudent.subjects;
    return cloneStudent;
}
console.log('3. Students information:', getStudentInfo(students[0]));

// -----------------------------------------------------------------------------------------------------------------
function getStudentsNames(student) {
    let studentsName = [];
    const iterator = student.values();
        for (const value of iterator) {
            for (let key in value) {
                if (key == 'name') {
                studentsName.push(value[key]);
                }
            }
        }
    return studentsName.sort();
}
console.log("4. Students' names in alphabetical order:", getStudentsNames(students));

// -----------------------------------------------------------------------------------------------------------------
// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(student) {
    let bestMark = 0;
    let mark;
    let stud;
    for (let i = 0; i < student.length; i++) {
        stud = getStudentInfo(students[i]);
            console.log(stud);
            mark = stud.averageMark;
            console.log(mark);
                if (Number(mark) > bestMark) {
                    bestMark = Number(mark);
                    console.log(bestMark);
                    if(Object.values(stud.averageMark) == bestMark) {
                        console.log(stud);
                    }
                }
    }
    // return bestMark;
}

console.log(getBestStudent(students));

// console.log(students);