// let a=parseInt(prompt("garaas too oruulna uu"));
// let b=parseInt(prompt("garaas too oruulna uu"));
// function max(a,b) {
//     if(a>b) {
//     return a;
//     } else return b;
// }
// let max_utga=max(a,b)
// console.log(max_utga);
// // n-2
// console.log("===========n-2===============");
// let ar=parseInt(prompt("toogoo oruulna uu!"))
// let array =[1,2,3,4,5,6,7,8,9];
//  function condition(array ) {
//      for (let i=0; i<=array.length; i++) {
//        if(array[i]== ar){
//        console.log(array[i]);
//      } else return  -1;
//  }
// }  
//  let nuhtsul=condition(array)
//  console.log(nuhtsul);
// // n-3
// // console.log("==========n-3==============");
// let t=parseInt(prompt("textee oruulna uu?"))
// let text =[`q`,`w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p`,`a`,
// `s`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`z`,`x`,`c`,`v`,`b`,`n`,`m`];
//  function condition(text ) {
//      for (let i=0; i<=text.length; i++) {
//        if(text[i]==t){
//        console.log(text);
//      } else return  -1;
//  }
// }  
//  let shalgah=condition(text)
//  console.log(shalgah);
 //n-4 ugugdsun 2 too interval dahi sanamsargui too butsaah function bich
 
  //  function random(){
  
  //   return Math.floor(Math.random()*(max-min+1)+min);
  // }
  // let min=parseInt(prompt("garaas toogoo  oruulna uu"));
  // let max=(parseInt(prompt("garaas toogoo oruulna uu")));
  //  let ih_too=random();
  //  console.log(ih_too);
  //  console.log("=============n-4====================");

  //  n-5 ugugdsun array-iin dundajiig oloh function bicheerei
//   let n=parseInt(prompt("ta  utga oruulna uu"));
//   let n1=parseInt(prompt("ta utgaa oruulna uu"));
//    function dundaj (n,n1) {
//      return (n+n1)/2;
//    }
//    let s=dundaj(n,n1);
//     console.log(s);
  // console.log("============n-5=================");
  // n-6 ugugdsun array-iin niilber oloh function
//   let array=[parseInt(prompt("garaas toogoo oruulna uu"))];
//   console.log(array);
//   let add=0;
//   let i=0;
//    function sum(array) {
//    while(i<array.length) {
//     add+=array[i];
//     i++;
//    }
//        return dundaj=add+array.length;
//    }
//    let a=sum(array);

// console.log(a);
// console.log("======================n-8====================");
// Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.
// let up=prompt("texteee oruulna uu!");
// let arr=[];
// const Upper=()=>{
//   for(let i=0; i<=up.length; i++){
//       arr=up[i].toUpperCase();
//       console.log(arr);
//   }
//   return arr;
// }
// Upper();

// console.log("=============n-9========================");
// Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.
let low=prompt("texteee oruulna uu!");
let arr= '';
const lower=()=>{
  // for(let i=0; i<=low.length; i++){
  //     arr = arr + low[i].toLowerCase();
  //     console.log(arr);
  // }
  console.log(low.toLocaleLowerCase());
  return low.toLocaleLowerCase();
}
 lower();
