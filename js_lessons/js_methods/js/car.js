// let carBrands=[["Aston Martin Laganda Ltd","UK",2016],
//                ["Audi","Germany",2016],
//                ["BMW","Germany",2016],
//                ["Chevrolet","USA",2016],
//                ["Dodge","USA",2016],
//                ["Ferrari","Italy",2016],
//                ["Honda","Japan",2016],
//                ["Lamborghini","Italy",2016]];
// let row=carBrands.length;
// let col=carBrands[0].length;
// console.log(carBrands.i);
// function serach(query) {
//     //  if(carBrands=='A')
//     let foundArray = [];
//     for( let i=0; i<row; i++) {
//         console.log("Ehnii davtalt");
    
//     // for(let j=0; j<col; j++) {
//     //     console.log("daraagiinh davtalt");
//     // } 
//         if(carBrands[i][0].charAt(0)==query){
//             foundArray.push(carBrands[i]);
//         }
//     }   
//     if(foundArray.length==0) return "oldsongui";
//     else {
//         for(let j=0;j<foundArray.length;j++){
//             console.log("brand:"+foundArray[j][0]+'\n'+"uls:"+foundArray[j][1]+"\n"+"on:"+foundArray[j][2])
//         }
//     } 
// } 
// console.log(carBrands.length);
// console.log(carBrands[0].length);
// query = prompt("haih utgaa oruul");
// let found = serach(query);
// console.log(found);

// //  neg davtalt ashiglasan ni:
// console.log("=============n-1====================");
// let carBrands=[["Aston Martin Laganda Ltd","UK",2016],
//                ["Audi","Germany",2016],
//                ["BMW","Germany",2016],
//                ["Chevrolet","USA",2016],
//                ["Dodge","USA",2016],
//                ["Ferrari","Italy",2016],
//                ["Honda","Japan",2016],
//                ["Lamborghini","Italy",2016]];
//     for(let i=0; i<carBrands.length; i++) {
//          let x = carBrands[i][0].split('').at(0);
//         if(x.toLowerCase()==="a") {
//             console.log("Brand: "+carBrands[i][0]);
//             console.log("Country:"+carBrands[i][1]);
//             console.log("Year:"+carBrands[i][2]);
//         }
//     }
    // uildverlesen ulsaar ni n-2
console.log("==============n-2=======================");
      let carBrand=[["Aston Martin Laganda Ltd","UK",2016],
               ["Audi","Germany",2016],
               ["BMW","Germany",2016],
               ["Chevrolet","USA",2016],
               ["Dodge","USA",2016],
               ["Ferrari","Italy",2016],
               ["Honda","Japan",2016],
               ["Lamborghini","Italy",2016]];
    for(let i=0; i<carBrand.length; i++) {
         let x = carBrand[i][1].split('').at(0);
        if(x.toLowerCase()==="u") {
            // console.log("Brand: "+carBrand[i][0]);
            console.log("Country:"+carBrand[i][1]);
            console.log("Year:"+carBrand[i][2]);
        }
    }
    console.log(carBrand.length);