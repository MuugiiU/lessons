let n=parseInt(prompt( "toogoo oruulna uu"));
let rev=0;
console.log("tanii oruulsen too",n);
let temp=0;
while(n!==0) {
    temp=n%10;
    rev=rev*10+temp;
    n=Math.floor(n/10);
}
console.log("tanii oruulsan toonii urvuu too",rev);