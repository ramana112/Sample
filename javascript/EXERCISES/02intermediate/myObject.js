// let ob = {
//     fN : 'venkat',
//     lN : 'ramana',
//     addr : 'Nellore',
//     Ph : 9848022338
// }

// console.log(`my first name ${ob.fN}`);

let vid1 = {
    title : 'Strings Concepts',
    author : 'venkat',
    length : 13 
}
let vid2 = {
    title : 'OOPS Concepts',
    author : 'ramana',
    length : 15 
}

let changelength = function( vid){
    return {
    format1 : `time of this vid is ${vid.length+5}`,
    format2 : `time of this vid is ${vid.length+3}`
}}
let changeis = changelength(vid1);
console.log('the changed value is: '+changeis.format2)
