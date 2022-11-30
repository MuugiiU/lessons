let years=prompt("та жилээ оруулна уу");

if (years%4===0 && years%400===0){
  console.log("Өндөр жил мөн");
}
else if(years%100===0) {
  console.log("Өндөр жил биш");
}
else{
  console.log("аль нь ч биш");
}
 