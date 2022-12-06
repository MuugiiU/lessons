console.log("=======тэгш тоо хэвлэ=============");
let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let even = [];
let j = 0, i = 0;
while (i < array.length) {
    if (array[i] % 2 === 0) {
        even[j] = array[i];
        console.log(array[i]);
        j++;
    }
    i++;
}

console.log(even);
console.log("==========сондгой тоо хэвлэ=======");
 let odd=[];
 let s=0;
 let v=0;
  while( s<array.length) {
    if(array[s]%2!==0) {
        odd[v] = array[s];
        console.log(array[s]);
        v++;
} 
  s++;
}
console.log(odd);

