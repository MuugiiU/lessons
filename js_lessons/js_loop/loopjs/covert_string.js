let n=prompt("ta textee oruulna uu");
console.log(n);
let result;
 for(let i=0; i<=n.length;i++) {
  if(i!==n.length) {
    result=n.toUpperCase();
    console.log(result);
  } else {
    result=n.toLowerCase();
    console.log(result);
  }
 
} 