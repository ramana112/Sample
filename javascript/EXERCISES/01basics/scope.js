let global = 'global value';
var gb = 'var global'
const ct = 'const variable'
if(true){
    let local = 'local value'
    let global = 'global in local'
    console.log(local);
    console.log(global);
    var gb = 'var global in local'
    console.log(gb)
    const ct = 'const in variable'
    console.log(ct)

}
console.log(gb)
  
console.log(global);
console.log(ct)

//console.log(local);

// //kings territory problem

// //let king = 'ram'

// if(true){
//     //let king = 'ram1'
//     if(true){
//         //let king = 'ram2'
//         console.log(king)
//     }
// }

// if(true){
//     console.log(king)
// }