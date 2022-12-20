let ognoo=prompt("ta ognoogoo oruulna uu?");
 console.log(ognoo);
 let year=ognoo.substring(0,4);
 let sar=ognoo.substring(4,6);
 let day=ognoo.substring(6,8);
     console.log(year+"-"+sar+"-"+day);
 console.log("=============n-2==============");


 
 let num=prompt("ta dugaaraa oruulna uu");
   console.log(num);
  if (num.substring(0,2)=='99' || num.substring(0,2)=='94' || num.substring(0,2)=='85' || num.substring(0,2)=='95'||num.length==8) {
  console.log(num,"Mobicomiin dugaar baina");
  } else if(num.substring(0,2)=='90' || num.substring(0,2)=='91' || num.substring(0,2)=='96'||num.length==8) {
    console.log(num,"Skyteliin dugaar baina");
  } else if(num.substring(0,2)=='88' || num.substring(0,2)=='89' || num.substring(0,2)=='86'|| num.length==8) {
    console.log(num,"Uniteliin dugaar baina");
  } else if(num.substring(0,2)=='98' || num.substring(0,2)=='97' || num.substring(0,2)=='93' || num.substring(0,2)=='83'|| num.length==8){
    console.log(num,"G-Mobiliin dugaaar baina");
  } else{
    console.log("ta dugaaaraa shalgana uu",num);
  }
