"use strict";
// function sayHello(){
//     for(var i=0; i<5;i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// sayHello();
// let a = 2;
// a=3;
// console.log(a);
//*****************************************This keyword and Bind method ********************/
// const person = {
//     name : 'venkat',
//     age : 26,
//     walk (){
//        console.log(this);
//     }
// }
//person.walk();

// const walk = person.walk.bind(person);
//  walk();
//  let talk =function(){
//     console.log(this);
//  };
//  talk();

//*****************************************Arrow Functions**************************/
//normal
// let myFn = function(num){
//     return num*num;
// }
// //Arrow function
//  let myFn1 = num =>  num*num;

// console.log(myFn1(3));

//*****************************************Arrow and this key word**************************/








//*****************************************Array.map**************************/
// const colors = ['red', 'green', 'blue']

// let items = colors.map(function (color) { return color  })

// let items1 = colors.map( color => `colors:${color}`)
// console.log(items1);

//*****************************************object destructuring**************************/
// const address = {
//     street: 'postal colony',
//     city : 'nellore',
//     state : 'ap'
// }

// // let street = address.street;
// // let city = address.city;
// // let state = address.state;
// // console.log(street+'-'+city+'-'+state)

// const {street:st,city,state} = address;
// console.log(street);

//*****************************************object destructuring**************************/
    //using arrays
// const first = [1,2,3];
// const second = [4,5,6];

//const combi = first.concat(second); 
// const combi = [...first,'a','b',...second,'z']
// console.log(combi);

    //using objects

// const first = {name:'venkat'};
// const second = {addr:'nellore'};
// const combi = {...first,...second, state:'ap'}
// const first1 = first;
// console.log(first1);

// let a = 10;
// {
//     let a=20;
//     console.log(a);
// }
//     console.log(a);
// let a=10;
//  a = 20;
// console.log(a);
// var a = 10;
// var a = 20;
// console.log(a);


//*****************************************classes *********************************/

// class Person{
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log('walk');
        
//     }
// }

// const person1 = new Person('ram');
// person1.walk();
 
// class Teacher extends Person{
//     constructor(name,degree){
//         super(name)
//         this.degree = degree;
//     }
//     teach(){
//         console.log('teach'+this.name)
//     }
// }

// const teacher1 = new Teacher('venkat', 'btech')
// teacher1.teach();


//*****************************************MOdules *********************************/
