let num=prompt("та дүнгийн оноогоо оруулна уу");
if(num>=90 && 100>=num)
{console.log("A үнэлгээ");}
 else if(num>=80 && 89>=num )
{console.log("B үнэлгээ");}
 else if(num>=70 &&79>=num)
{console.log("C үнэлгээ");}
else if (num>=60 && 69>= num)
{console.log("D үнэлгээ");}
else if (num<=59)
{console.log("F үнэлгээ");}
else{
    console.log("алдаатай утга оруулсан байна")
}
console.log("============N-1 finish===========");
// n-2
let n=prompt("Та сараа оруулна уу");

if(0<n && 1==n) {
    console.log("1-р сар 31 хоногтой");
}
  else if(1<n && n==2) {
    console.log("2-сар 28 хоногтой");
}
 else if(2<n && 3==n) {
    console.log("3-р сар 31 хоногтой")
}
 else if (3<n && 4==n) {
    console.log("4-р сар 30 хоногтой");
}
 else if (4<n && 5==n) {
    console.log("5-р сар 31 хоногтой");
}
else if(5<n && 6==n) {
    console.log("6-р сар 30 хоногтой");
}
else if (6<n && 7==n) {
    console.log("7-р сар 31 хоногтой");
}
else if(7<n && 8==n) {
    console.log("8-р сар 31 хоногтой");
}
else if(8<n&& 9==n) {
    console.log("9-р сар 30 хоногтой");
}
else if(9<n&&10==n) {
    console.log("10-р сар 31 хоногтой");
}
else if(10<n&& 11==n) {
    console.log("11-р сар 30 хоногтой");
}
else if(11<n&& 12==n) {
    console.log("12-р сар 31 хоногтой");
}
else
{console.log("та оруулсан сараа шалгана уу")}
console.log("=========N-2 finish==========");

// n-3
let a=prompt("Та дурын тоо оруулна уу!");

if( a%3==0 ) {
    console.log("3-ын үржвэр байна");
}
 else if(a%7==0) {
    console.log("7-ын үржвэр байна");
}
 else if (a%3==0 && a%7==0) {
    console.log("3 ба 7-ын үржвэр байна");
}
 else if (!(a%3==0 || a%7==0)) {
    console.log("3 ба 7-ын үржвэр биш байна");
}
else {
    console.log("Ийм тоо байхгүй байна");
}
console.log("=======N-3 finish==========");

// n-4
let too=prompt("Та дурын тоо оруулна уу!")
if (too>0) {
 console.log("Эерэг тоо");
}
 else{
    console.log("Сөрөг тоо");
 }
 console.log("==========N-4 finish===========");
//  N-5
let jin=prompt("Та биеийн жингээ оруулна уу");
let undur=prompt("Та биеийн өндрөө оруулна уу");

const bmi = jin/((undur/100)**2)

 if(bmi<=18.5){
    console.log("Та туранхай байна")
 }
  else if(bmi>=18.5 && bmi<=25){
    console.log("Та хэвийн жинтэй байна")
 }
 
  else if(bmi>=25.5 && bmi<=29.5){
    console.log("Та илүүдэл жинтэй байна")
 }
  
  else if(bmi>=30 && bmi<=40){
    console.log("Та  хэт таргалалттай байна")
 }
 else {
    console.log("Та жиндээ анхаарна уу");
 }
 console.log("========N-5 finish=========");
//   N-6 
let duriintoo=prompt("Дурын тоо оруулна уу");
 if(duriintoo%2==0){
    console.log("Тэгш тоо байна");
}
 else {
    console.log("Сондгой тоо байна");
 }
 console.log("=============N-5 finish========");
//  N-7
let old=prompt("Та төрсөн оноо оруулна уу");
const myold=2022-old;
if(0<=myold && myold<=1){
    console.log("Infant");
}
 else if(1<= myold && myold<=3){
    console.log("Toddler" );
}
else if(3<myold && myold<=5){
    console.log("Preschool");
} 
else if (5 < myold && myold <=12){
    console.log( "Gradeschooler")
}
else if(12 <myold &&myold<= 18){
    console.log("Teen")
}
else if (18 < myold && myold<=21){
   console.log("Young adult")
} 
else if (21 < myold){
    console.log("Adult");
}
else{
    console.log("utgaa shalga nuu");
}


 





