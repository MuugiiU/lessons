let num =prompt("registeriin dugaaraa oruulna uu!");
console.log(num);
let useg=num.substring(0,2);
let too=num.substring(2,10);
let length=num.length;
 if(typeof(useg=="string")&&Number(too)&&length===10) {
    console.log("Tanii registeriin dugaar zuv baina");
 } else {
    console.log("tanii registeriin dugaar buruu baina");
 }