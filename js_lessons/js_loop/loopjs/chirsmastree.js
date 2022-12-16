let n=prompt("mod zurah toogoo oruulna uu");
var txt =" ";
for (let i=0; i<=n; i++) {
    txt= " ";

    for(let j=i; j<=n; j++) {
        txt += " ";
    }
    for(let s=0;s<(i*2)-1;s++) {
        txt += "*";
    }
  console.log(txt);
}