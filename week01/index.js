console.log("Hello, world!");

//a = 10
//var a = 10
//let a = 10

// if var is used first, you can change it later, but not if the let is changed first 

//let b = 10
//var b = 10

//b = 100
//b = "Hello" // In  Java it is not possible, but since Javascript is dynamic value, u can do it 

// Object literal

var student = {
        studentId : 1,
        studentName : "JOhn",
        studentAge : 20,
        city : "New York"
}
console.log(student)
console.log(student.studentName)
console.log(typeof student)

for (let key in student){
    console.log(key)
    console.log(student[key])
}
for (let key in student){
    console.log( '$key -> ${student[key]}')
    console.log(student[key])
}
var emp = {
    empId: 1,
    empName : "John",
    empAge : 20,
    empCity : "New York"
}
//Object Destructuring
var{empId, empName, empAge, empCity} = emp;
var result = "Pass"
console.log(empId)
var newEmp = {
    empId,
    empName,
    empAge,
    empCity,
    result
}
console.log(newEmp)
var emp1 = {
    ...emp,
    result
}
console.log(emp1)
