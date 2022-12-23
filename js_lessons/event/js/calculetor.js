// Variables
const addbtn=document.querySelectorAll(".btn");
const uildel=document.querySelectorAll(".btn1");
const ustgah=document.getElementsByClassName("btn3");
const dis=document.querySelector("#display");
const firtsNum=parseFloat(addbtn);
const secondNum=parseFloat(addbtn);

let result="";
let inputs = "";


// Functions
 const add=()=>{ //urjver();
   return firtsNum*secondNum;
 }
 const sum=()=> { //niilber();
  return firtsNum+secondNum;
 }
const huvaah=()=>{ //huvaah();
  return firtsNum/secondNum;
}
const hasah=(firtsNum, secondNum)=>{  //hasah();
  return firtsNum-secondNum;
}
const clear=(e)=>{  //tsewerleh ();
  const child=e.parentNode;
  parent.removeChild(child);
  console.log(child);
}
const operator=()=>{
let numbers = dis.value.split(/[+\-\*\%]/);
let operators = dis.value.replace(/\d/g, "");
console.log("ddfdf", numbers, operators);
numbers = numbers.map(Number(dis.value));
}
 switch(operator) {
  case '*': add(); break;
  case '%': huvaah(); break;
  case '-': hasah(); break;
  case '+': sum(); break;

 }



console.log(dis);
console.log(addbtn);


addbtn.forEach((btn) => { 
  btn.addEventListener("click",(e) =>{
    console.log("Clicked",e.target.textContent);
    dis.value+=e.target.textContent;
  });
});
uildel.forEach((btn1) => {
    btn1.addEventListener("click",(e) =>{
      console.log("Clicked",e.target.textContent);
      dis.value+=e.target.textContent;
    });
  });


  // ustgah.addEventListener("click",clear());
 
 
    
   

