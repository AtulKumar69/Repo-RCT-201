var arr = [
    { id: 1, name: 'Atul', age: 19, salary: 460000 },
    { id: 2, name: 'Ram', age: 20, salary: 600000 },
    { id: 3, name: 'Hari', age: 19, salary: 80000 },
    { id: 4, name: 'Sarman', age: 30, salary: 75000 },
    { id: 5, name: 'Kundru', age: 22, salary: 10000 }
];
// console.log(arr);
var subjects;
(function (subjects) {
    subjects["chemistry"] = "chemistry";
    subjects["physics"] = "physics";
    subjects["maths"] = "maths";
})(subjects || (subjects = {}));
var Teacher = [
    { id: 6, name: 'Prabhanjan', subjet: subjects.physics, number_of_student: 12 },
    { id: 7, name: 'Arjun', subjet: subjects.chemistry, number_of_student: 15 },
    { id: 8, name: 'Albert', subjet: subjects.maths, number_of_student: 33 }
];
// console.log(Teacher);
var sorts = function (arr, a) {
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1;
        var sort1 = arr[i];
        while (j >= 0 && arr[j].id > sort1.id) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = sort1;
    }
    return arr;
};
sorts(arr, 'id');
sorts(Teacher, 'id');
console.log(arr);
console.log(Teacher);
