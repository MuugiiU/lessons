const email=document.getElementById("email");
const password=document.getElementById("password");
const repeat=document.getElementById("repeat");
const button=document.getElementById("btn");

let medeelel = () => {
    console.log(email.value);
    console.log(password.value);
    console.log(repeat.value);
    
}
let checked =()=> {
    {
        if(password.value === repeat.value){
            console.log("correct");
         } return ;  
    } 
}

button.addEventListener("click",medeelel);
button.addEventListener("click",checked);
