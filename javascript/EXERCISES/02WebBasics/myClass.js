class User{
    constructor(fName, lName, age){
        this.fName=fName,
        this.lName = lName,
        this.age = age
    }
    getFullname(){
        return `${this.fName} ${this.lName} is my fullname`
    }
    editName(myName){
        let  myName1 = myName.split(' ')
        this.fName = myName1[0]
        this.lName = myName1[1]
    }
}
class Teacher extends User{
    constructor(fName, lName, age, subject){
        super(fName, lName, age)
        this.subject = subject;
    }
    getFullname(){
        return `${this.fName} ${this.lName} is my fullname and i teach ${this.subject}`
    }
    
}


const venkat = new Teacher('venkat', 'ramana', 26, 'java')
console.log(venkat)

const thana = new User('thana', 'kumares', 25)

console.log(venkat.getFullname())
console.log(thana.getFullname())

venkat.editName('venkata ramanaiah')
console.log(venkat.getFullname())