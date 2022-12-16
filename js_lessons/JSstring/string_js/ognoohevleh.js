let ognoo=prompt("ta ognoogoo oruulna uu?");
 console.log(ognoo);
 let year=ognoo.substring(0,4);
 let sar=ognoo.substring(4,6);
 let day=ognoo.substring(6,8);
     console.log(year+"-"+sar+"-"+day);
 console.log("=============n-2==============");
 let num=prompt("ta dugaaraa oruulna uu");
   console.log(num);
   
     number=num.substring(0,2);
  if (number.substring(0,2)=='99' && number.substring(0,2)=='94' && number.substring(0,2)=='85' && number.substring(0,2)=='95') {
  console.log(number,"Mobicomiin dugaar baina");
  } else if(number.substring(0,2)=='90' && number.substring(0,2)=='91' && number.substring(0,2)=='96') {
    console.log(number,"Skyteliin dugaar baina");
  } else if(number.substring(0,2)=='88' && number.substring(0,2)=='89' && number.substring(0,2)=='86') {
    console.log(number,"Uniteliin dugaar baina");
  } else if(number.substring(0,2)=='98' && number.substring(0,2)=='97' && number.substring(0,2)=='93' && number.substring(0,2)=='83'){
    console.log(number,"GMobileiin dugaaar baina");
  } else{
    console.log("ta dugaaaraa shalgana uu",number);
  }
