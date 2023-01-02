// console.log("===============n-1=============");
// 1.  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// 2. arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.

// let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// let copy=[...arr];
// let sorted=true;
// let temp;
//  do {
//     sorted=false;
//     for(let i=0;i<arr.length-1; i++){
//         if(arr[i]>arr[i+1]){
//             temp=copy[i+1];
//             arr[i+1]=arr[i];
//             arr[i]=temp;
//             sorted=true;
//         }
//     }
//  } while(sorted);
//  console.log("Undsen:",copy);
//  console.log("eremblesen:",arr);
let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
console.log("anhnii:",arr);
 let bubble=()=>{
    for(let i=0; i<arr.length;i++) {
        for(let j=0;j<(arr.length-i-1);j++) {
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    } 
    
    console.log("eremblegdsen:",arr);
 }
bubble();