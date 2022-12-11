let s=prompt("Та дурын тоо оруулна уу");
    s=Number(s);
let s1=prompt("Та дурын тоо оруулна уу");
    s1=Number(s1);
    console.log(Math.round(Math.random(s-s1)));
    console.log(Math.round(Math.random(s1)));
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