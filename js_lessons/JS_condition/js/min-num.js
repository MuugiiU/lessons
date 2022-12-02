let a=prompt("а тоо оруулна уу"), 
b=prompt("b тоо оруулна уу"), 
c=prompt(" c тоо оруулна уу"), 
d=prompt("d тоо оруулна уу");

if(a<b&& a<c && a <d){
    console.log(a,"-н хамгийн бага тоо");
}
else if(b<a && b<c && b<d){
    console.log(b,"-н хамгийн бага тоо");
}
else if(c<a && c<b && c<d){
    console.log(c,"-н хамгийн бага тоо");
}
else if(d<a && d<b && d<c){
    console.log(d,"-н хамгийн бага тоо");
}
else{
    console.log("утгаа зөв оруулна уу");
}
