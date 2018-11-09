let student = {
    name : 'venkat',
    age : 26,
    isActive : true
}

let jsonStudent = JSON.stringify(student);
console.log(typeof jsonStudent);
 console.log(jsonStudent)

 let jsonObject = JSON.parse(jsonStudent)
 console.log(typeof(jsonObject))
 console.log(jsonObject)