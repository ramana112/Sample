
import  { Person }  from "./person";

 class Teacher extends Person{
    constructor(name,degree){
        super(name)
        this.degree = degree;
    }
    teach(){
        console.log('teach'+this.name)
    }
}
 let tech = new Teacher('venkat', 'btech');
 tech.teach();


