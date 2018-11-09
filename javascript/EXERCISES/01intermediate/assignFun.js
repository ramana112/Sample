let getMyGrade = function(obmarks, totalMarks){
    let myPercent = (obmarks / totalMarks)*100
    let myGrade =''

    if(obmarks>=90){
        myGrade = 'A' ;
    }

    else if (obmarks>=80) {
        myGrade = 'B' ;
    }
    
   else if (obmarks>=70){
        myGrade = 'C' ;
    }
    
    else if (obmarks>=60){
        myGrade = 'D' ;
    }
    else {
        myGrade = 'f';
    }
    return `my grade is --${myGrade} and Percentage is-- ${myPercent}` ;
}

let result = getMyGrade(92,150)

console.log(result)