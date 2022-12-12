const colors=["red","blue","green"] 
let colorIndex = 0;
const body = document.getElementsByTagName("body")[0];

for(let i=0; i<4; i++) {  // davtaltaar div uusgej bg 
const div=document.createElement("div"); 
div.innerText ="Hello World";
 body.appendChild(div);
}
console.log("div");


for(let i=0;i<3; i++) { //davtaltaar button uusgej bg
   const button=document.createElement("button");
   button.textContent="Change color";
   body.appendChild(button);
}
 console.log("button");
const change=()=> {
  for (let i=0; i<div.length;i++) {
    let color=getColors();
    div[i].style.backgroundColor=color;
  }
}
const getColors =()=> {
  let red =Math.floor(Math.random()*256).toString();
  let green =Math.floor(Math.random()*256);
  let blue =Math.floor(Math.random()*256);
     return`rgb(${red},${green},${blue})`;

}
  
button.addEventListener("click",change);
// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor () {
// myButton.style = "background-color: green"
// }
// myButton.addEventListener("click",changeBackgroundColor);