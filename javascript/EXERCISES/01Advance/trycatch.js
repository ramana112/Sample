    let toRs = function(dollar){
        if(typeof dollar == 'number'){
        return dollar*64
    }else{
        throw Error("you entered NaN")
    }
    }

    // let convToRs = toRs('five')
    // console.log(convToRs);

    try {
        let convToRs = toRs(5)
        console.log(convToRs);
          
    } catch (error) {
        console.log(error)        
    }
    
    console.log(" code will not run if program will crash, Anyway as u handled the error the rest of the code will execute.. ")
