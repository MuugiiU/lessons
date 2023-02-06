let array=[4,2,34,4,1,12,1,4];
let arr1 = [];
let duplicated = [];
for(let i=0; i<array.length;i++){
    if(arr1.findIndex((item)=>item==array[i])!=-1){
        duplicated.push(array[i]);
    }
    else {
        arr1.push(array[i]);
    } 
}
console.log("arr:", [...new Set(duplicated)]);
 

