// // // n-1
// let n=prompt(" Та дурын бутархай тоо оруулна уу");
//         n=Number(n);
// console.log(Math.round(n));
// console.log("=============n-1============");
//  n-2
// let a=prompt("Та дурын 3 оронтой тоо оруулна уу")
// let num1=parseInt(a.charAt(0))+parseInt(a.charAt(1))+parseInt(a.charAt(2))
// console.log(num1);
// console.log("==========n-2 ===============");

// // n-3
// let s=prompt("Та дурын тоо оруулна уу");
//     s=Number(s);
// let s1=prompt("Та дурын тоо оруулна уу");
//     s1=Number(s1);
//     console.log(Math.round(Math.random(s-s1)));
//     console.log(Math.round(Math.random(s1)));
// // 2 toonii hoorondoh sanamsargui too gargah 
// // min  буюу бага утга,  max буюу их утга  (max-min+1)+min //2-7 7-2+1+2  
// let min, max;
// if(s > s1) {
//     max = s;
//     min = s1;
// }
// else {
//     max = s1;
//     min = s
// }

// console.log(Math.round(Math.random()*(max - min+1)+ min));
// console.log((max - min + 1)+ min);
// // console.log("==============n-3==================");

// // n-4
// let a1=prompt("а- талын уртыг өгнө үү");
// let b1=prompt("b-талын уртыг өгнө үү");
//  c= Math.sqrt(Math.pow(a1,2)+Math.pow(b1,2));
// console.log(c,"c-ийн налуугын урт");


let n=parseInt(prompt("garaas utga oruul"));
let v=parseInt(prompt("garaas utga oruul"));
if (n>v){ 
    max=n;
} else {
    max=v;
}
 while (min<max) {
    if (min%2!==0) {
        console.log(min);
    }
    min +=1;
  }
 