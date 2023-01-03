// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Гончигсумлай өөртөө зориулан нийт төлбөр буцаадаг function бичжээ. Эдгээр тохиолдолуудад тус бүр хэдийг төлөхийг function - оор олно уу? 3000₮, 27500₮, 100000₮.

// 1. Нийт төлбөр ийг олдог 1 function.
// 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.
// 3. Нийт төлбөрийн дундаж - ийг олдог 1 function.

console.log("============n-1===============");
// let une=parseInt(prompt("unen dungee oruulna uu"));
// let sum=[];
// let total = function() {
//  
//   if( une<=5000 && une>=30000) {
//      sum=une+((une*20)/100);
//     console.log(sum);
//   } else {
//     sum=une+(une*15/100);
//     console.log(sum);
//   }
//   return sum;
// }
// total();

console.log("==========n-2==============");
// zuvhun nemegdel tulbur oldog function
let une=parseInt(prompt("unen dungee oruulna uu"));
let sum=[];
let total = function() {
  
  if( une<=5000 && une>=30000) {
     sum=(une*20)/100;
    console.log(sum);
  } else {
    sum=une*15/100;
    console.log(sum);
  }
  return sum;
}
total();
console.log("==========n-3=============");
let
