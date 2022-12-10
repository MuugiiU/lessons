
let n = parseInt(prompt("дурын тоогоо оруулна уу"));
let P = true;
if (n === 2) {
    console.log(`${n} бол анхны тоо мөн.`,n );
} else {
    
    for (let i=2; i <n; i++) {
        if(n % i === 0) {
            P = false;
    
        } 
        
    } 
    if (P) {
            console.log(`${n}("Анхны тоо мөн")`,n );
        
        } else {
            console.log(`${n} бол анхны тоо биш .`,n);
        }
       
    }