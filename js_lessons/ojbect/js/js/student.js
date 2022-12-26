let students = [
    {
        name: 'Сэд-Эрдэнэ',
        on: 1999,
        hobby: "морь",
        single: "bish"
    },
    {
        name: 'Гончигсумлай',
        on: 2008,
        hobby: "сагс",
        single: "mun"
    },
    {
        name: 'Эрдэнэ',
        on: 1999,
        hobby: "hulbumbug",
        single: "bish"
    },
    {
        name: 'Сэдээ',
        on: 2007,
        hobby: "усан спорт",
        single: "mun"
    },

];
let ha = 2002;
let bodlogo = () => {
    for (let i = 0; i <= students.length; i++) {
        if (students[i].on <= ha) {
            console.log(students[i].name);

        }

    }

}
bodlogo();

let gants =()=>{
   
     for(let i=0; i<=students.length; i++){
        if(students[i].single==="mun"){
           console.log(studends);
        }
     }
}
 gants();
 let age=()=> {
    let add=0;

    for( let i = 0; i<students.length; i++) {
       add=add+students[i].on;
        
    }
        return  add/students.length;
   }
 age();