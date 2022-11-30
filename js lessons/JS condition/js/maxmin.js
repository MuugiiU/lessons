let a=prompt("а тоо оруулна уу"), 
 a1=Number(a),
b=prompt("b тоо оруулна уу"), 
 b1=Number(b),
c=prompt(" c тоо оруулна уу"), 
 c1=Number(c);

 let max = 0;
 let min = 0;

if(a1<b1 && a1<c1){
    console.log(a1,"-н хамгийн бага тоо");

    min = a1;
}
else if(b1<a1 && b1<c1){
    console.log(b1,"-н хамгийн бага тоо");
    min = b1;
}
else if(c1<a1 && c1<b1 ){
    console.log(c1,"-н хамгийн бага тоо");
    min = c1;
}




if (a1>b1&& a1>c1) {
    console.log(a1,"-н хамгийн их тоо");
    max = a1;

}
else if(b1>a1 && b1>c1) {

console.log(b1,"-н хамгийн их тоо");
max = b1;

}
else if(c1>a1 && c1>b1) {
    console.log(c1,"-н хамгийн их тоо");
    max = c1;
}
else{
    console.log("утгаа зөв оруулна уу");
}


let answer = min + max;
console.log(answer,"нийлбэр нь");
if (max===min){
    console.log("энэ 2 тоо тэнцүү бөйнө");
}

