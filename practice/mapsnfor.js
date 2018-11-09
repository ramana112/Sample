// let venkat = {
//     name: 'I am Venkat',
//     age : 26,
//     native : 'Nellore'
// }
// let thana = {
//     name: 'I am Thana',
//     age : 25,
//     native : 'Erode'
// }
// let rakesh = {
//     name: 'I am Rakesh',
//     age : 26,
//     native : 'Visak'
// }

// let users = new Map()

// users.set('venkat', venkat)
// users.set('thana',thana)
// users.set('rakesh',rakesh)

// console.log(users.size)
// console.log(users.get('rakesh'))
// console.log(users.keys())
// console.log(users.values())

// for (const key of users.keys()) {
//     console.log(key)
// }

// for (const values of users.values()) {
//     console.log(values.name)
// }

// for (const [key, value] of users.entries()) {
//     console.log(key+'---'+value.name)    
// }
//Assignment
//convert the above into lilterals

//using foreach
// users.forEach((value, key) => console.log(key+'---'+value.name))

// var arrofArr = [['one','1'],['two', '2'], ['three','3']]

// var newMap = new Map(arrofArr)
// console.log(newMap)

//*******************************spread operator********************/

// let myfn = function (a,b,c,j) {
//     return a+b+c+c;
//   }

//   const a = [2,5,7,22]
//   let b =myfn(...a)
//   console.log(b);
  
// var x = ['apple', 'kiwi']
// var y = ['mango', 'orange', 'grapes']
// var xy = [...x,...y]
// console.log(xy);

//*************************classes and inheritance concept ***********************/
// class person {
//     constructor(name, age, id){
//         this.name=name;
//         this.id = id;
//         this.age = age;
//     }

//     fnAge(){
//         console.log(this.name +'age is'+this.age);
        
//     }
// }

// var ram  = new person('venkat', 26, 123)
// var raj  = new person('rajesh', 24, 321)

// ram.fnAge();

//********************generator function******************/
// function* sampleGenerator(){
//     yield 'apple'
//     yield 'banana'
//     console.log('line after banana');
//     yield 'mango'
   
// }
// let sample = sampleGenerator();
// console.log(sample.next().value)
// console.log(sample.next().value)
// console.log(sample.next().value)
// console.log(sample.next().value)

//*******************************promises ***************************/
// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//       resolve('Cleaned The Room');
//     });
//   };
  
//   let removeGarbage = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve(message + ' remove Garbage');
//     });
//   };
  
//   let winIcecream = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve( message + ' won Icecream');
//     });
//   };
  
//   cleanRoom().then(function(result){
//       return removeGarbage(result);
//   }).then(function(result){
//       return winIcecream(result);
//   }).then(function(result){
//       console.log('finished ' + result);
//   })

//   promises.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
//       console.log('all fincished ')

//   })

  //we can trigerred one of them
//   like instead of all , we have to race