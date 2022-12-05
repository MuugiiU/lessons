// n-1 utga onooj ugch bg 
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);
for(let i=0; i<=itCompanies.length-1;i++){
    console.log(itCompanies[i].length)
}

console.log("===============n-3====================")
// n-3 dundah company hevlej bg ni
let dundaj = itCompanies[Math.floor(itCompanies.length/2)];
console.log(itCompanies[0]);
console.log(dundaj);
console.log(itCompanies[6]);
console.log("===========n-4=======================");
// n-4 
for(let i=0; i<=itCompanies.length-1;i++){
    console.log(itCompanies[i])
}
console.log("=============n-5====================");
//  n-5
for(let i=0; i<=itCompanies.length-1;i++){
    console.log(itCompanies[i].toUpperCase());
}
console.log("=============n-6=====================");
console.log(itCompanies+"зэрэг мэдээллийн технологийн томоохон компаниуд.");
