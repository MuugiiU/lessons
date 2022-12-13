const colors=["red","blue","green"] 
let colorIndex = 0;
const body = document.getElementsByTagName("body")[0];

for(let i=0; i<4; i++) {  // davtaltaar div uusgej bg 
var div=document.createElement("div"); 
div.innerText ="Hello World";
 body.appendChild(div);
}
console.log("div");


for(let i=0;i<3; i++) { //davtaltaar button uusgej bg
   var button=document.createElement("button");
   button.textContent="Change color";
   body.appendChild(button);
}
 console.log("button");
let divs = document.getElementsByTagName("div");
let buttons=document.getElementsByTagName("button")


const change=()=> {
  for (let i=0; i<divs.length;i++) {
    let color=getColors();
    console.log(color);
    divs[i].style.backgroundColor=color;
    buttons[i].style.backgroundColor=color;

  }
}
const getColors =()=> {
  let red =Math.floor(Math.random()*256).toString();
  let green =Math.floor(Math.random()*256);
  let blue =Math.floor(Math.random()*256);
     return`rgb(${red},${green},${blue},${0.2})`;

}

for(let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", change);
  buttons[i].addEventListener("mouseover",change)
 }
 
