let n = parseInt(prompt("Гараас олон оронтой тоо оруулна уу"));
let  u = 0;
console.log(n);
let digit=[0,0,0,0,0,0,0,0,0,0];

while (n !== 0) {
   u=n%10;
  switch (u){
    case 0: digit[0]++; 
      break;
    case 1: digit[1]++;   
      break;
    case 2: digit[2]++; 
      break;
    case 3: digit[3]++; 
      break;
    case 4: digit[4]++; 
      break;
    case 5: digit[5]++; 
      break;
    case 6: digit[6]++; 
      break;
    case 7: digit[7]++; 
      break;
    case 8: digit[8]++; 
      break;
    case 9: digit[9]++; 
      break;
    default: console.log("too bish bn");
  }
   n=Math.floor(n/10);
}

console.log(digit);
