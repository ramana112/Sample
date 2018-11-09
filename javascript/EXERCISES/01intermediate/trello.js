// const days = ['mon', 'tue','wed','thur','fri','sat']

// let sayHello = function(){
//     console.log("hi welcome");
    
// }

// days.forEach( function(days,index){
// console.log(`startswith ${index+1}--${days}`);
// });

// for(let i=0; i<days.length;i++){
//     const element = days[i]
//     console.log(element);
// }

const MyTodos = []
MyTodos.push("brush")
MyTodos.push("bath")
MyTodos.push("ready")

MyTodos.forEach(function(todo, index){
    console.log(`my tast no. ${index+1}--is ${todo}`)
})