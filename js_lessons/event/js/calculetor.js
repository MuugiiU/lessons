// Variables

const allbtn = document.querySelectorAll(".btn");
const uildelBtns = document.querySelectorAll(".oper");
const ustgah = document.getElementsByClassName("btn3")[0];
const dis = document.querySelector("#display");
const equal = document.querySelector(".equal");
let firtsNum = null;
let secondNum = null;
let uildel = null;
let result="";

// Aripmatic-iin uildel hiideg Functions
 const mul =(a, b)=>{ //urjver();
   return a * b;
 }
 const add=(a, b)=> { //niilber();
  return a + b;
 }
const div=(a, b)=>{ //huvaah();
  return a / b;
}
const sub=(a, b)=>{  //hasah();
  return a - b;
}
const clear=(e)=>{  //tsewerleh ();
  dis.value= " ";
  uildel = " ";

}
const operator=()=>{
  secondNum = dis.value;
   if(firtsNum && secondNum && uildel){  //enhii bolon 2dahi toog bn uu? gej shalgaj bg
    switch(uildel) {
      case '*': return mul(parseFloat(firtsNum), parseFloat(secondNum));
      case '%': return div(parseFloat(firtsNum), parseFloat(secondNum));
      case '-': return sub(parseFloat(firtsNum), parseFloat(secondNum)); 
      case '+': return add(parseFloat(firtsNum), parseFloat(secondNum));
      default: break;
  } 
 }
}


// Too aguulsan buh btn deer event holboj bn
console.log(uildelBtns);

allbtn.forEach((btn) => { 
  btn.addEventListener("click",(e) =>{
    console.log("Clicked",e.target.textContent);
    dis.value += e.target.textContent;
  });
});

uildelBtns.forEach((btn1) => {   // uildel gesen  button deer darah ved 
    btn1.addEventListener("click",(e) =>{
      uildel = e.target.textContent;
      console.log(uildel);
      firtsNum = dis.value;
      dis.value = "";
    });
  });


equal.addEventListener("click",()=>{  // tsentsuu button 
      result = operator();
      dis.value = result;
});

ustgah.addEventListener("click",clear);
  
  
    
