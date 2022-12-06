let n = parseInt(prompt("Гараас олон оронтой тоо оруулна уу"));
 let i;
 for(i=0; i<=n.length;i++){
   for(let j=0; j<=n.length; j++) {
    if(n[i][j]%10==n) {
        console.log(n);
    }
   }
 }