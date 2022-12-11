let n=parseInt(prompt("toogoo oruulna uu"));
let q='';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    q+=j+' ';
    }
    console.log(q);
    q=' ';
   
 }
 for (let i=n; i>0; i--) {
    for(let j=1; j<=i; j++) {
      q+=j+ ' ';
    }
   console.log(q);
    q=' ';
 }
 
    
    
 