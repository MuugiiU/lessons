// // n-1
let n=prompt(" Та дурын бутархай тоо оруулна уу");
        n=Number(n);
console.log(Math.round(n));
console.log("=============n-1============");
 n-2
let a=prompt("Та дурын 3 оронтой тоо оруулна уу")
let num1=parseInt(a.charAt(0))+parseInt(a.charAt(1))+parseInt(a.charAt(2))
console.log(num1);
console.log("==========n-2 ===============");

// n-3
let s=prompt("Та дурын тоо оруулна уу");
    s=Number(s);
let s1=prompt("Та дурын тоо оруулна уу");
    s1=Number(s1);
// 2 toonii hoorondoh sanamsargui too gargah 
// min  буюу бага утга,  max буюу их утга  (max-min+1)+min //2-7 7-2+1+2  
let min, max;
if(s > s1) {
    max = s;
    min = s1;
}
else {
    max = s1;
    min = s
}

console.log(Math.round(Math.random()*(max - min+1)+ min));
console.log((max - min + 1)+ min);
console.log("==============n-3==================");
// let on = prompt("onoo oruulna uu");
// let sar= prompt("sar oruulna uu");
// let udur = prompt("udur oruulna uu");
// on-sar-udur input 2022 12 1 -> 2022-12-01
// console.log(Math.random());
// n-4
let a1=prompt("а- талын уртыг өгнө үү");
let b1=prompt("b-талын уртыг өгнө үү");
 c= Math.sqrt(Math.pow(a1,2)+Math.pow(b1,2));
console.log(c,"c-ийн налуугын урт");
