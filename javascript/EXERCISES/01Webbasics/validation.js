
function myValidation(){
    let myValue = document.getElementById('myform').value;
    if(isNaN(myValue)|| myValue<1 || myValue>20){
        console.log("u entered input is not Valid");        
    }else{
        console.log("u entered a valid input")
    }

}

//form validation
document.querySelector('.myform1').addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.password.value)
    event.target.username.value='';
})
