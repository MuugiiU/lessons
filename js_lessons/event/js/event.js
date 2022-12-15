//  input deeree text bicheed +nemeh tovchoo darahad jagsaaltiig ni door nemeh uildel
const addbtn = document.getElementById("btn");//button id
const text = document.getElementById("text"); //input id
const task = document.getElementsByClassName("task")[0]//jagsaaliin id 

const cardItem = (utga) => {    /// add hiisen ved jagsaaltan door input bolon button uusej bg 
    const item =
        ` <div>
        <input type="text" id="text" readonly value="${utga}">
    

     <button class="edit" > <i class="fa-sharp fa-solid fa-pen"></i></button>
    <button class="done"> <i class="fa-solid fa-check" style="color: green;"></i></button>
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
    let add = document.getElementById("text") ;
    const ad=add.value;
     

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