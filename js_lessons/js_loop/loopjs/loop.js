// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count = count + 1;
// }
// console.log("==============n-1===========");
// //  n-2 
// let count1 = 0;
// while (count1 <= 10) {
//     if (count1 % 2 !== 0) {
//         console.log(count1);
//     }
//     count1 += 1;
// }
// console.log("===========n-2=============");
// // n-3
// let c = 0;
// while (c <= 10) {
//     if (c % 2 === 0) {
//         console.log(c);
//     }
//     c = c + 1;
// }
// console.log("=============n-3==========");
// // n-4 
// let num=1;
// let sum=0;
// while(num<=100) {
//     sum=sum+num;
//     num +=1;
    
//     }
//    console.log(`100 хүртлэх тооны нийлбэр:${sum}`);
//    console.log("=============n-4===========");
  
   // n-5
   
//    let n=parseInt(prompt("Та тоо оруулна уу"));
//    let nem=1;
//    let sum1=0;

//     while (nem<=n) {
//         sum1=sum1+nem
//         nem+=1;
//     }
//         console.log(`n хүртлэх тооны нийлбэр: ${sum1}`);
      
   


//  n-6
// let a=parseInt(prompt("дурын тоогоо оруулна уу"));
// let isPrime = true;
// if (a === 2) {
//     console.log(`${a} бол анхны тоо мөн.`)
// } else {
//     let i = 2;
//     while (i <a) {
//         if(a% i === 0) {
//             isPrime = false;
//             break;
//         } 
//         i++;
//     } 
//     if (isPrime) {
//             console.log(`${a}("Анхны тоо мөн")`);
        
//         } else {
//             console.log(`${a} бол анхны тоо биш мөн.`)
//         }
       
//     }
// 
// n-7 
// let a=parseInt(prompt("Гараас тоо оруулна уу"));
// let b=parseInt(prompt("Гараас 2дахь тоогоо оруулна уу"));
// let max;
//   if(a>b){
//     max=a;
//     console.log("max");
//   } else {
//    max=b;
//    console.log("max");
//   }
   
// if ( max===2){
//    console.log('${max},бол анхны тоо') 
//  } else {
//    let i=2;
//    while(a<b){
//       let nuuts=true;
//       while(i<a&&i<b){
//          if(a%i===0){
//             nuuts=false;
//             break;
//          }
//          i++;
//       }
//       if(nuuts){
//          console.log('${a & b}("Анхны тоо мөн")');
//       } else {
//          console.log('${a& b}("Анхны тоо биш")');
//       }
//       max ++;
      
//    }
   
//  }
//    // n-8 factral too buyu garaas oruulsan toonii urjber
// let n=parseInt(prompt("garaas toogoo oruulna uu!"));
//  let add=1;
//  let num=1;
//   while (num<=n){
//    add=add*num;
//    num+=1;
//   }
// console.log("garaas avsan toonii urjver:" , add);
// // n-8 duusav
// n-9 ugugdsun toonii niilber oloh  
//  let a=parseInt(prompt("garaas too oruulna uu"));
//   let sum=0;
//   let num=1;
//   while(num<=a) {
//    sum=sum+num;
//    num+=1;
//   }
//   console.log("garaas oruulsan toonii niilber",sum);
// n-9 duusav
// //  n-10 ugugdsun toonii sondgoi toog olood niilberiig ni olno uu?
// let n=parseInt(prompt("garaas duriin too abna uu!"));
// let count=0;
// let sum=0;
//  while(count<=n) {
//    if(count%2!==0){
//       console.log(count);
//       sum=sum+count;

//    }
//   count+=1; 
//   console.log("garaas oruulsan toonii sondgoi toonii niilver",sum);
// }
//  n-10 duusav
// // n-11 n-hurtleh toonii tegsh too olood tuuniihee niilberiig olno uu?
//  let n=parseInt(prompt("garaas duriin toogoo oruulna uu"));
//  let count=0;
//  sum=0;
//   while(count<=n) {
//    if(count%2==0) {
//       console.log(count);
//       sum=sum+count;
//  } count+=1;
//  console.log("garaas oruulsan toonii tegsh toonii niilber",sum);
//   }
// //   n-11 duusav
// n-12 ugugdsun toonii urbuu toog olno uu?
// let num = parseInt(prompt("ta toogoo oruulna uu"));
// let reverseNum=0;
// let nuuts=0;
// console.log("tanii oruulsan too",num);
//  while(num!==0) {
//     unit=num%10;
//     reverseNum=reverseNum*10+unit;
//     num=Math.floor(num/10);
//  }
//  console.log("tanii oruulsan toonii urbuu too",reverseNum);
   // n-12 duusav
   // n-13 ugugdsun toog ugeer hevlej haruulna uu?
 let num =parseInt(prompt("garaas toogoo oruulna uu"));
 let p=0, m=0,s=0;
  while(num!==0){
   p=num%10;
   s=s*10 +p; 
   if(p<10) {
      m+=p;
   }
   num=Math.floor(num/10);
  }
  console.log(s);
  let useg =" ";
   while (s!==0) {
      p=s%10;
      switch(p) {
         case 0:{useg += "тэг",+" ";break}
         case 1:{useg +="нэг",+" ";break}
         case 2:{useg +="хоёр",+" ";break}
         case 3:{useg += "гурав",+" "; break}
         case 4:{useg +="дөрөв",+" ";break}
         case 5:{useg +="тав",+" ";break}
         case 6:{useg += "зургаа",+" "; break}
         case 7:{useg +="долоо",+ " ";break}
         case 8:{useg +="найм",+" ";break}
         case 9:{useg +="ес",+" ";break}
      }
      s= Math.floor(s/10);
   }
  console.log(useg);