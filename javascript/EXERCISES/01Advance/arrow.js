// let sayHello = function(name){
//     return `hi ${name}  how r u ?`
// }

// console.log(sayHello('ramana'))

//optimastion-1(function removed)
// let sayHello = (name) =>{
//     return `hi ${name}  how r u ?`
// }

// console.log(sayHello('ramana'))
// //optimastion-2(braces and return are removed)
// let sayHello = (name) => `hi ${name}  how r u ?`
// console.log(sayHello('ramana'))


// const todos = [{
//     title:'Buy Bread',
//     isDone:false,
// },{
//     title:'Go to Gym',
//     isDone:false
// },{
//     title:'Record UTube Videos',
//     isDone:true,
// }]

// const thingsDone = todos.filter((todo) => todo.isDone === false)
// console.log(thingsDone)

let cameras = {
    price : 600,
    weight : 1000,
    camDes : function(){
        return `canon camera of price ${this.price}$ ..!`
    }
}

console.log(cameras.camDes())
//NOTE: arrow function doesnnot applicable to a function where "this" is used
// let cameras = {
//     price : 600,
//     weight : 1000,
//     camDes : () => `canon camera of price ${this.price}$ ..!`
//     }


// console.log(cameras.camDes())