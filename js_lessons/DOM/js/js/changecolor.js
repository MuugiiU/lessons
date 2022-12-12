const colors=["red","blue","green"] 
let colorIndex = 0;
const body = document.getElementsByTagName("body")[0];

for(let i=0; i<4; i++) {
const divs=document.createElement("div");  
  body.appendChild(divs);
}
console.log(divs);
  
for(let i=0;i<=3; i++) {
    const button=document.getElement("button");
    //  body.appendChild(button);
    console.log(button);
} 
