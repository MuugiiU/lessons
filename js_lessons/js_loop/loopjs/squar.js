let n=prompt("squar zurah toogoo oruulna uu");
let txt='';
for (let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
       
        if(i==0||i==n-1||j==0||j==n-1) {
            txt+="*";
         
         
        } else {
            txt+=" "
           
        }
      
    }
    txt+="\n";
}
console.log(txt);
     