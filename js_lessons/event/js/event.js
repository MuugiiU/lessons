//  input deeree text bicheed +nemeh tovchoo darahad jagsaaltiig ni door nemeh uildel
const addbtn = document.getElementById("btn");//button id
const text = document.getElementById("text"); //input id
const task = document.getElementsByClassName("task")[0]//jagsaaliin id 

const cardItem = (utga) => {    /// add hiisen ved jagsaaltan door input bolon button uusej bg 
    const item =
        ` <div>
        <input type="text" id="text" readonly value="${utga}">
    

     <button class="edit" onclick="edit(this)" > <i class="fa-sharp fa-solid fa-pen"></i></button>
     <button class="done" onclick="checked(this)"> <i class="fa-solid fa-check" style="color: green;"></i></button>
     <button class="delete" onclick="ustgah(this)">
         <i class="fa-sharp fa-solid fa-trash " style="color: red;"></i></button> </div>`;
    return item;

}
const nemeh = () => {  // nemeh button duudah function
    let txt = document.getElementById("text");
    console.log(txt.value);
    const utga = txt.value;
    if (utga === "") {
        alert("Ta utga oruulaagui baina");
    } else {
        task.innerHTML += cardItem(utga);
    }
}
const ustgah = (e) => {        //ustgah function
    const parent = e.parentNode.parentNode;
    const child = e.parentNode;
    parent.removeChild(child)

}

const edit = (e) => {        //edit hiihdee

    let tasktext = e.parentNode.children[0];     
    if(tasktext.hasAttribute("readonly")){
        tasktext.removeAttribute("readonly");
        e.children[0].classList.remove("fa-pen");
        e.children[0].classList.add("fa-plus");
    }
    else {
        tasktext.setAttribute("readonly", "readonly");
        tasktext.setAttribute("value", tasktext.value);
        e.children[0].classList.add("fa-pen");
        e.children[0].classList.remove("fa-plus");
    }
    // const ad=add.value;
}

const checked =(e)=>{
    let check=e.parentNode.children[0];
    if(check.classList.contains("line")) {
        check.classList.remove("line");
    }
     else {
        check.classList.add("line");
     }
}
addbtn.addEventListener("click", nemeh); // button darah ved nemeh uilel hiine gesniig zaana
document.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        nemeh();   // enter tovch darah ved nemeh uildel hiih function
    }
})


// on sar udur gargaj bg ni
const dateTime = document.getElementById("dd");
function day() {
    let d = new Date().getDate();
    let m = new Date().getMonth();
    let y = new Date().getFullYear();
    return `${y}-${m + 1}-${d}`;
}
let d = day();

console.log(document.getElementById("dd"));

dateTime.innerHTML = "Он сар өдөр: " + d;
//  on sar udur ni duusaj bg ni