// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Гончигсумлай өөртөө зориулан нийт төлбөр буцаадаг function бичжээ. Эдгээр тохиолдолуудад тус бүр хэдийг төлөхийг function - оор олно уу? 3000₮, 27500₮, 100000₮.

// 1. Нийт төлбөр ийг олдог 1 function.
// 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.
// 3. Нийт төлбөрийн дундаж - ийг олдог 1 function.

console.log("============n-1===============");
let une=parseInt(prompt("unen dungee oruulna uu"));
let sum=[];
let total=()=>{
    for(let i=0;i<=une.length;i++)
   if( une[i]<=5000&&une[i]>=30000) {
      return sum=une[i]+((une[i]*20)/100);
     console.log(sum);
   } else {
     sum=une[i]+(une[i]*15/100)
     console.log(sum);
   }
}
total();
// console.log(price1>=5000 && price1<=30000 ? price1*0.2+price1 : price1*0.15+price1) ;