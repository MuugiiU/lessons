// const arr=()=>{
// let array=[0,1,2,3,4,5,6,7,8,9,10];
//  const oddnumbers = array.filter((data) =>data%2!==0)
//  console.log(oddnumbers)
//  return oddnumbers;
// }
// arr();
// const arr=()=>{
//     let ar=[0,1,2,3,4,5,6,7,8,9,10];
//     console.log(ar);
//     const newArr=ar.reverse();
//     console.log(newArr);
//     return ar;
// }
// arr();


// let a=parseInt(prompt("garaas toogoo oruulna uu?"));
//  console.log(a);
//  let temp=a;
//  let sum=0;
// while(temp){
//     sum+=temp%10;
//     temp=Math.floor(temp/10);
// }
// console.log(sum);
//  pascaliin gurvaljin

// const body=document.getElementsByTagName("body")[0];
// const div=document.createElement("div");
// body.appendChild(div);
// const h1=document.createElement("h1");
// div.appendChild(h1);
// h1.innerHTML="Hello World";
// h1.style="color:blue; font-size:2rem; heigth:100px width:100px";

// let list =["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд",  "Гончигсумлай","Нэргүй", "Бальбийгомбо", "Баатар" ];
// let addlist =list.push("tsetsgee");
// let addlist1=addlist.push("navchaa");
//  let a=addlist1.splice(6,1);
//  let b=a.pop();
//  console.log(b);
// let body= document.getElementsByTagName("body")[0];
// let div= document.createElement("div");
// body.appendChild(div);
// let h1 = document.createElement("h1");
// div.appendChild(h1);
// h1.innerHTML = "hello"
// h1.style.color="red"

 let find =[];
 let max;
 for(let i=0; i<=100; i++){
    if(i%7===0 && i%6===0){
        find.push(i);
        max=Math.max(...find)
    }
 }
 console.log(max);
