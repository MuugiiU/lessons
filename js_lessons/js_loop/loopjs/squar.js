let n=prompt("squar zurah toogoo oruulna uu");
let txt='*';
for (let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
       
        if(i==j||i==n||j==0||j==n) {
            txt=i+j;
         
            console.log(txt);
        } else {
            console.log("");
        }
        console.log("\n");
    }
    
}
     