	// var uri="my test.asp?name=ståle&car=saab";

	// console.log(encodeURI(uri)+ "<br>");

    // console.log(decodeURI(uri));

    // console.log(encodeURIComponent(uri))
    // console.log(decodeURIComponent(uri))

    // console.log(escape("Hello? How are you!"))
    // console.log(unescape("Hello%3F%20How%20are%20you%21"))

    //123 essential questions    **************https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
            //(2).

// var x = '200';
//     if( x <= 100 ) {
//         console.log('true');
//     }else {console.log('false')}
//     if( (x > 100) ) {
//         console.log('true');
// }else {console.log('false')}

            //3. What is the drawback of having private methods in a JavaScript object?

// var Employee = function (name, company, salary) {
//     this.name = name || "";       
//     this.company = company || "";
//     this.salary = salary || 5000;
    
//     // We can create a private method like this
//     var increaseSalary = function () {
//         this.salary = this.salary + 1000;
//     };
    
//     };

            //4. What is “closure” in javascript? Can you provide an example?

//     var globalVar = "abc";

// // Parent self invoking function
// (function outerFunction (outerArg) { // begin of scope outerFunction
//   // Variable declared in outerFunction function scope
//   var outerFuncVar = 'x';    
//   // Closure self-invoking function
//   (function innerFunction (innerArg) { // begin of scope innerFunction
//     // variable declared in innerFunction function scope
//     var innerFuncVar = "y";
//     console.log(         
//       "outerArg = " + outerArg + "\n" +
//       "outerFuncVar = " + outerFuncVar + "\n" +
//       "innerArg = " + innerArg + "\n" +
//       "innerFuncVar = " + innerFuncVar + "\n" +
//       "globalVar = " + globalVar);
//   // end of scope innerFunction
//   })(5); // Pass 5 as parameter
// // end of scope outerFunction
// })(7); // Pass 7 as parameter

        //5.
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48
// function mul (x) {
//     return function (y) { // anonymous function
//     return function (z) { // anonymous function
//         return x * y * z;
//     };
//     };
// }
            //6.
            // function foo(x) {
            //     console.log(x);
            // }
            // function bar(func) {
            //     func("Hello World!");
            // }
            //             //alerts "Hello World!"
            // bar(foo);
            //7.

            // function a() {
            //     console.log('A');
            // }
            // //alerts 'A', returns undefined
            
            // function b() {
            //     console.log('B');
            //     return a();
            // }
            // //alerts 'B', returns function a
            
            // function c() {
            //     console.log('C');
            //     return a();
            // }
            // //alerts 'C', alerts 'A', returns undefined
            
           // b();
                            //8.   Question 6. How to empty an array in JavaScript?        
                            //9. is array mthd
        // const array = [1,2,3,4] ;
        // console.log(
        // Array.isArray(array));
                            //10
        // var output = (function(x) {
        //     delete x;
        //     return x;
        //   })(10);
          
        //   console.log(output);
//     function AlertMessage() {  
// console.log(isNaN(Infinity));
// console.log("This is \n a program")
// if (confirm("Are you sure you want to delete your profile photo?") == false) {
//         alert("Deleting photo...");
//     }
//     else {
//         alert("Glad you decided against deleting the photo!");

//     }
//     prompt("Please enter your nickname", "nickname");
// }
// function add() {  }
// var student= {age:[20,30,40], batch:"ABC"};
// var arr = [1,2,2,3]
// delete student.batch;
// console.log(typeof(arr));
//7.
// var y = 1;
//   if (1) {
//           function f(){}
//     y += typeof f;
//   }
//   console.log(y);

//8.

// var Employee = function (name, company, salary) {
//         this.name = name || "venkat";       //Public attribute default value is null
//         this.company = company || "regnant"; //Public attribute default value is null
//         this.salary =  salary||5000; //Public attribute default value is null
    
//         // Private method
//          var increaseSalary = function () {
//             return this.salary = this.salary + 1000;
//         };
    
//         // Public method
//         this.dispalyIncreasedSalary = function() {
//                 console.log(this.salary);
//                return this.increaseSalary();
           
//         };
//     };
    
//     // Create Employee class object
//     var emp1 = new Employee("John","Pluto",3000);
//     // Create Employee class object
//     var emp2 = new Employee("Merry","Pluto",2000);
//     // Create Employee class object
//     var emp3 = new Employee("Ren","Pluto",2500);
//     var emp4 = new Employee();
 
//     console.log(emp1)
//.9
// function Person(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }
    
//     // Create 2 Person objects
//     var myFather = new Person("John", "Doe", 50, "blue");
//     var myMother = new Person("Sally", "Rally", 48, "green");
    
//     // Add a name method to first object
//     myFather.name = function() {
//         return this.firstName + " " + this.lastName;
//     };
    
//     // Display full name
//     console.log(myFather.name); 



// function mul (x,i,z) {
//         return function (y) { // anonymous function 
//             return function (z) { // anonymous function 
//                 return x * y * z*i; 
//             };
//         };
//     }
//     console.log(mul(2,5)(3)(2));
    
// var arrayList = ['a','b','c','d','e','f']; // Created array 
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
// arrayList.splice(0, arrayList.length, 2); // Empty the array by setting length to 0
// console.log(anotherArrayList); // Output []
//#
// var Employee = {
//         company: 'xyz'
//       }
//       var emp1 = Object.create(Employee);
//       delete Employee.company
//       console.log(emp1.company);

//#
// if(1) {// If testCondition is true then 
//         var foo = function(){ 
//          console.log("inside Foo with testCondition True value");
//         }; 
//       }else{
//                var foo = function(){ 
//          console.log("inside Foo with testCondition false value");
//         }; 
//      }

// if(1) {// If testCondition is true then 
//         function foo(){ 
//          console.log("inside Foo with testCondition True value");
//         }; 
//       }else{
//                function foo(){ 
//          console.log("inside Foo with testCondition false value");
//         }; 
//      }
// (function add(){
//         console.log('self invoking fn');
        
// }())

// var foo1 = function foo(){ 
//         return 12; 
// }; 

// console.log(foo());


// var salary = "1000$";

//  (function () {
         
//      console.log("Original salary was " + salary);
//      var salary = "5000$";

//      console.log("My New Salary " + salary);
// })();
//##
// function foo(){ 
//         return foo; 
//       }
//       console.log(new foo() instanceof foo);


//       function Person(first, last, age, eye) {
//                 this.firstName = first;
//                 this.lastName = last;
//                 this.age = age;
//                 this.eyeColor = eye;
//             }
            
//             // Create 2 Person objects
//             var myFather = new Person("John", "Doe", 50, "blue");


//             console.log(myFather instanceof Person);

//********************************* */
// var counterArray = {
//         A : 3,
//               B : 4
//     };
//     counterArray["C"] = 1;
//     console.log(counterArray);
//     //length
//     let c=0;
//     for(let i in  counterArray){
            
//             c++;
//             let v = counterArray[i];
//             console.log(v);
//     }

//     console.log(c)


// var a = 10;
// var a =30;
// let b = 50;
// b=20;

// var add = () =>{
//         console.log(b);
// }
// var sub = () =>{
//         console.log(b);
// }

// add();


// for(var i=0;i<10;i++){
//         console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
//         }
//         console.log(i); //throws an error as "i is not defined" because i is not visible


// var n = [1,5,3,7,8,9,4]

// var obj = {a:1, b:2, c:'ram'}
// // n.map(function(i,j,k){
//         console.log(k)
// })


// var arr = n.forEach((num, index) => {
//         return n[index] = num * 2;
//     });

// console.log(arr);

// let arr = n.map(num => {
//         return num * 2;
//     });

// console.log(arr);

// for(let i in obj){
// console.log(obj[i]);
// }

// let pets = new Object(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";

// for (let pet in pets) {
//    console.log(pet); // "species"
// }

// for (let pet of pets) {
//     console.log(pet); // "Cat", "Dog", "Hamster"
// }


// counting word without splitting********************

//  sen = sen.trim()
// var c = 0;
// for(i=0; i<sen.length;i++){
//         if(sen.charAt(i) == ' '){
//              c++;
//         }
// }
// console.log(c+1)

 
// var stringDelimiter = function (sampleInput, delimiter) {
//         var stringArray = [''];
//         var j = 0;
    
//         for (var i = 0; i < sampleInput.length; i++) {
//             if (sampleInput.charAt(i) == delimiter) {
//                 j++;
//                 console.log(stringArray.push('')+'*****')
//             } else {
//                 stringArray[j] += sampleInput.charAt(i);
//             }
//         }
//         return stringArray;
//     }
 
//     console.log(stringDelimiter(sen, ' '))

// var srr = [1,2]
// var srr1 = [1, 'd']
// console.log(srr+srr1);


// prime numbers printing

// var a = 9;
// c = 0;
// for(i=2;i<7;i++){
//         if(a%i == 0){
//                c++;
//         }
// }
// console.log(c>=1?'not prime':'prime');

// function printPyramid() {
// 	var numberofRows =10;
// 	var outputBlock="";
// 	for (var i = 1; i <= numberofRows; i++) {
// 		for (var j = 1; j <= i; j++) {
// 			outputBlock+=j + "     ";
// 		}

// 		console.log(outputBlock);
// 		outputBlock="";
// 	}
// }
// printPyramid();

// function displayPyramid(n) {
//         for (var i = 0; i < n; i++) {
//                 var str = '';

//           for (var j = 1; j < n-i; j++) {
//             str = str + ' ';
//           }
//           for (var k = 1; k <= (i+1); k++) {
//             str = str + j+' ';
//           }
//           console.log(str);
         
//         }
//       }
//       displayPyramid(5);
      
//       console.log(''+''+'s')

//******************************printing words with out split method */
// var sen = 'hi this venkat ramana and';
// var str = '';

// for(i=0;i<sen.length;i++){
//         if(sen[i]==' '){

//         }else{
//                 str = str+sen[i];
//         }
// }
// console.log(str)
// console.log(sen[0]);

//*****************************prime numbers printing */
// var arr = [1,2,7,8,9,6,2,4,6,2,1,6]

// for(i=0;i<arr.length;i++){
// var c = 0;

//        for(j=i+1;j<arr.length;j++){
//                if(arr[i]==arr[j]){
//                        c++;
//                }
//        }
//        if(c==0){
//                console.log(arr[i] )
//        }
// }

// var arr = [1,2,3,4,5,6,7,2]
// var arr1 = []
// for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                         arr.splice(j,1)
//                 }

// }
        
// }
// console.log(arr)
// console.log(arr.splice(2,4,22))

// console.log(arr)

//88888888888888888888888*************duplication of array****************/
// var arr = [1,2,3,4]
// var arr1=[]
// var i =0;
// for(j=0;j<arr.length;j++){      
//         for(k=0;k<3;k++){
//                 arr1[i] = arr[j]
//                 i++
//         }
// }
// console.log(arr1);
// let a = 10;

// function add(){
//         a = 20;
//         console.log(a);
       
// }
// {
//         var b = 'ram'
// }

// add();
// console.log(b)

// for(var i=0;i<5;i++){
//         (function(){
//                 var i1 = i;
//                 setInterval(function(){
//                         console.log(i1)
//                 },2000)
//         })()
      
// }

var arr = [1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1]
var arr1 = [];
var j=0;
for(i=0;i<arr.length;i++){
        var c = 0;
        if(arr[i]==arr[i+1] && arr[i]==0){
                arr1[j] = i;
                j++
        }      
}

// console.log(arr1);

for(i=0;i<arr1.length;i++){
        if(arr1[i]==arr1[i+1]){
                console.log(i)
        }
}



var a=[0,0,1,0,0,0,0,0,1,0,0,0,0];
var count=1,length1=0,finalPosition=0,startPosition=0 ;


for(var index=0;index<a.length;index++)
{  count=1;
    for(inerindex=index+1;inerindex<a.length;inerindex++)
    {
       if(a[index]==0 && a[inerindex]==0)
       {
          startPosition=index;  
             count++;
       }
       else
       { 
           break;
       }
    }
                 if(length1<count)
              {
                  finalPosition=startPosition;
                 length1=count;
                 
              }
}
console.log("starting position "+finalPosition+" finalposition "+(finalPosition+length1-1));













// function mul(x) {
// 	return function(y) {
// 		return {
// 			result: x * y,
// 			sum: function(z) {
// 				return x * y + z;
// 			}
// 		};
// 	};
// }

// console.log(mul(2)(3).result);
// console.log(mul(2)(3).sum(4));
// (function () {
// 	var array = new Array(1,2);
// 	console.log(array);
// 	console.log(array.length);
// }());