let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let add = [];
let temp;
console.log(arr1);
console.log(arr2);
if(arr1.length>arr2.length){
    temp = arr1.length;
}
else temp= arr2.length;
for (let i = 0; i < temp; i++) {
    if(!arr1[i]||!arr2[i]){
        if(arr1.length>arr2.length){
            add[i] = arr1[i]*1;
        }
        else add[i] = 1*arr2[i]
        
    }
    else add[i] = arr1[i]*arr2[i];
}
console.log(add);



