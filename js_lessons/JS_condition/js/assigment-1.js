// N-1
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3;//true
let iv = 4 <= 3;//false
let v = 4 == 4;//true
let vi = 4 === 4;//true
let vii = 4 != 4;//false
let iix = 4 !== 4;//false
let ix = 4 != "4";//false
let x = 4 == "4";//true
let xi = 4 === "4";//false
console.log(i,iii,ii,iv,v,vi,vii,iix,ix,x,xi);  
console.log("==============N-1tugsuv==================");
// N-2

let one = 4 > 3 && 10 < 12;//true
let two = 4 > 3 && 10 > 12;//false
let three = 4 > 3 || 10 < 12;//true
let four = 4 > 3 || 10 > 12;//true
let five = !(4 > 3);//false
let six = !(4 < 3);//true
let eight = !(4 > 3 && 10 < 12);//false
let nine = !(4 > 3 && 10 > 12);//true
let ten = !(4 === "4");//true
console.log(one,two,three,four,five,six,eight,nine,ten);
console.log("=============N-2tugsuv====================");
// N-3

let age = prompt("Насаа оруулна уу ");
// console.log(typeof(age));
// console.log(age+10);
// console.log("age", age);
if (age>=30)
 {
    console.log("Таны нас идэр насан дээрээ явж байна");

 } else if  (age<=30)
 {  console.log("таны нас залуу дээрээ явж байна");}
 console.log("=========N-3 tugsuv=====");
//  N-4
let day=prompt("та өдрөө оруулна уу?")
if (day==1)
{ console.log("ажлын өдөр буюу даваа гариг")}
if (day==2)
{ console.log("ажлын өдөр буюу мягмар гариг")}
if (day==3)
{ console.log("ажлын өдөр буюу лхавга гариг")}
if(day==4)
{console.log("ажлын өдөр буюу пүрэв гариг")}
if(day==5)
{console.log("ажлын өдөр буюу баасан гариг")}
if(day==6)
{console.log("амралтын өдөр буюу бямба гариг")}
if(day==7)
{console.log("амралтын өдөр буюу ням гариг")}
if (day>=8)
{console.log("ийм өдөр байхгүй та гараас оруулсан тоогоо шалгана уу")}
console.log("========N-4==============")

// N-5
let timesalary=20;
let hour =prompt("Та цагаа оруулна уу");
console.log("salary =",salary=hour*timesalary); 