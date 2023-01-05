// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Гончигсумлай өөртөө зориулан нийт төлбөр буцаадаг function бичжээ. Эдгээр тохиолдолуудад тус бүр хэдийг төлөхийг function - оор олно уу? 3000₮, 27500₮, 100000₮.

// 1. Нийт төлбөр ийг олдог 1 function.
// 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.
// 3. Нийт төлбөрийн дундаж - ийг олдог 1 function.

let totalPrice = 0
let orderNumber = 0

console.log("============n-1===============");
let une1=parseInt(prompt("unen dungee oruulna uu"));
const moneyToPay = paymentWithTips(une1)
console.log("Toloh dun: ", moneyToPay)
console.log("Niit dun: ", total(moneyToPay))
console.log("dundaj: ", findAvarage())




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
let une2=parseInt(prompt("unen dungee oruulna uu"));
const moneyToPay2 = paymentWithTips(une2)
console.log("Toloh dun: ", moneyToPay2)
console.log("Niit dun: ", total(moneyToPay2))
console.log("dundaj: ", findAvarage())

// total();
console.log("==========n-3=============");
let une3=parseInt(prompt("unen dungee oruulna uu"));
const moneyToPay3 = paymentWithTips(une3)
console.log("Toloh dun: ", moneyToPay3)
console.log("Niit dun: ", total(moneyToPay3))
console.log("dundaj: ", findAvarage())

function total(addingPrice) {
  totalPrice += addingPrice
  orderNumber += 1
  return totalPrice
}

function paymentWithTips(price) {
  if (!price) return console.log('aldaa ', price)

  if (price > 5000 && price < 30000) return Math.round(price * 1.15)

  return Math.round(price * 1.2)
}

function findAvarage () {
  return Math.round(totalPrice / orderNumber)
}
