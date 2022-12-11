let a= parseInt(prompt("toogoo oruulna uu"));
let b= parseInt(prompt("toogoo oruulna uu"));
let max , min;

// 1.garaas 2 too avna
// 2. 2toogoo jisheed ih bagiig olood min max olno
// jishee ni 3,10 3s 10hurtelh tegsh esvel sondgoig olno
 let tegsh=function(a,b) {
    let tegsh_array = [], sondgoi_array=[];
    if(a>b) {
        max=a; min=b;
    } else {
        max=b; min=a;
    }
    for (let i=min; i<=max;i++) {
        if(i%2===0) {
            tegsh_array.push(i);
            // console.log(min[i]);
        } else if(i%2!==0) {
            sondgoi_array.push(i);
        }
    }
    console.log("tegsh:", tegsh_array);
    console.log("sondgoi:", sondgoi_array);

 }
 tegsh(a, b);
 