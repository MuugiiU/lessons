// n-1 zarlaj bg 
let arrayofNumber =[43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayofNumber);
console.log("==========n-1=======================");
// n-2 edgeer toonuudiin niilver
let arrayofNumber1 =[43, 56, 23, 89, 88, 90, 99, 652, 15, 290,11]
let i=0;
let sum=0;
 while(i<arrayofNumber1.length) {
    sum =sum + arrayofNumber1[i];
    i++;
 }

console.log(sum);
console.log("===========n-2=======================");


// n-3 hamgiin ih toog ol
let arrayofNumber3 = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let max =0;
for(let i=0; i < arrayofNumber3.length; i++) {
    if(max<arrayofNumber3[i]) {
    max = arrayofNumber3[i];
    }
}
console.log(`max utga ni: ${max}`);
// n-3 duusav
// n-4 hamgiin baga ni oloh
let min=max;
for(let i=0; i < arrayofNumber3.length; i++) {
    if(min>arrayofNumber3[i]) {
    min = arrayofNumber3[i];
    }
}
console.log(`min utga ni: ${min}`);
console.log("============n-4============");
// n-4 duusav
// n-5 arrray-iin ehend duriin too nem 
let arrayofNumber4= [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayofNumber4);
 arrayofNumber4.unshift(100);
 console.log(arrayofNumber4);
 arrayofNumber4.push(300);
 console.log(arrayofNumber4);