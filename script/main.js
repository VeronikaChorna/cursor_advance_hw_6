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
function getStudentsNames(students) {
    let studentsNames = [];
    const iterator = students.values();
        for (const student of iterator) {
                studentsNames.push(student['name']);
        }
    return studentsNames.sort();
}
console.log("4. Students' names in alphabetical order:", getStudentsNames(students));

// -----------------------------------------------------------------------------------------------------------------
function getBestStudent(student) {
    let bestMark = 0;
    let bestName;
    for (let i = 0; i < student.length; i++) {
        let stud = getStudentInfo(students[i]);
        let mark = stud.averageMark;
            if (Number(mark) > bestMark) {
                bestMark = Number(mark);
                bestName = stud['name'];
            }
    }
    return bestName;
}

console.log('5. Best student name:', getBestStudent(students));

// -----------------------------------------------------------------------------------------------------------------
function calculateWordLetters(word) {
    count = {};
    word = word.split('');
    word.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    return count;
}
console.log('6. Counts of characters:', calculateWordLetters("тест"));
