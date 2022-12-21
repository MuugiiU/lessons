const addbtn=document.querySelectorAll(".btn");
const uildel=document.querySelectorAll(".btn1");
const dis=document.getElementById("display");
console.log(addbtn);
addbtn.forEach((btn) => {
  btn.addEventListener("click",(e) =>{
    console.log("Clicked",e.target.textcontent);
  });
});
uildel.forEach((btn1) => {
    btn1.addEventListener("click",(e) =>{
      console.log("Clicked",e.target.textcontent);
    });
  });

