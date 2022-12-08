let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
// huiseer ni yalgah function
function gender (nameO) {
    let male=0;
    for(let i =0; i<nameO.length;i++) {
        if(nameO[i].gender==="male") {
            male++;
        }
               
    }   
    return {male:male, female: nameO.length - male};
}  
//1. Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 
console.log(gender(students));
//  gender gsn function-iin students dehi object-s male-g yalgaj abah 
console.log(gender(students).male);
// 2.  Сурагчдын насны дунджийг олох функц бичих 
//  students dehi dundaj nasiig olj bg  function
function ages (dundajage) {
     let add=0;

     for( let i = 0; i<dundajage.length; i++) {
        add=add+dundajage[i].age;
         
     }
         return  add/dundajage.length;
    }
    let x =ages (students);
   console.log(x);

    // 3. Сурагчидад овог нэмж оруулах 
    //  last name gesen value uusgeed students gesen objected uusgesen last name nemj hiine
      students[0].lastname="Bataa";  // students objected lastname uusgeed utgaa hiij bolno(.-r uusgej bg gsn ug) 
      console.log(students); 
    
        // let ovog=["bataa","sodoo","sukhee","bold","altaa"];
           for(let i=0; i<students.length; i++) {
              let ovog=prompt(students[i].name) ; //garaas last name-iinhaa utgiig abah arga
            students[i].lastname=ovog;
           }
           console.log(students);

        // 4.   Ижилхэн настай сурагчдыг олж шинэ object дотор хийх  
  let a =[];
        for(let i=0; i< students.length; i++) {
             
        }
