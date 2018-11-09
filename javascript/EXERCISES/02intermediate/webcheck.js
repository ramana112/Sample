let usermail = 'rama'
let password = '1234'
 
let userChecker = function(myString){
    if ((myString.includes('ram')) && (myString.length>2)){
        return true
    }
    return false
}

console.log(userChecker(usermail))

let passchecker