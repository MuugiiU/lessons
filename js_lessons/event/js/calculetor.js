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
  return firtsNum/secondNum();
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
let nmbrs = dis.value.split(/[+\-\*\%]/);
let operators = dis.value.replace(/\d/g, "");
console.log("ddfdf", nmbrs, operators);
nmbrs = nmbrs.map(Number(nmbrs));
 let minus = operators.indexOf("-");
 if(minus!=-1){
  result = hasah(nmbrs[minus],nmbrs[minus+1]);
  console.log(result);
 }
  //  switch(uildel.value=="%")
  // console.log(dis.value);
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
 
 
    
   

