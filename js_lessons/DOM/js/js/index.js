let array=["blue","red","pink","black","brown"];
let changecolorindex=0;
const body =document.getElementsByTagName("body")[0];
let mybtn = document.getElementById("mybtn");

 function changecolor() {
     if(changecolorindex >= 5){
        changecolorindex=0;
     }
    body.style =` background-color:${array[changecolorindex]}`; //body-nii background uurchilj bg 
    mybtn.style = "background-color: " + array[changecolorindex]; // button-nii background color uurchilj bg
    changecolorindex++;
}

 mybtn.addEventListener("click",changecolor);
 
    