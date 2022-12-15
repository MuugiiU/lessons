
const email=document.getElementById('email');
const password=document.getElementById('password');
const repeat=document.getElementById('repeat');
const button=document.getElementById('btn');

    // энд та нарт бүх input орж ирж байгаа зөв эсэхийг дараах байдалаар шалгана
    // 2 password хоорондоо адил байгаа эсэх
    // password ийн урт 8с урт байх ёстой
    // email дотор заавал @ болон . орсон байх
    // эдгээр нөхцөл биелсэн бол true буцаана
  

// let medeelel = () => {
//     console.log(email.value);
//     console.log(password.value);
//     console.log(repeat.value);
    
// }
let checked =()=> {
    
        if(password.value === repeat.value&& password.value.length>8&&email.value.indexof('@')!=-1&&email.value.indexof('.')!=-1){
            return true;
        }
        else return false;   


}
let inputs = document.getElementsByTagName("input");
const utga = document.getElementsByTagName("input").length;
for (let i = 0; i < utga; i++) {
  // input бүрт addEventListener өгч change эвэнтийг сонсож байна
  inputs[i].addEventListener("change", () => {
    // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
    console.log("Email-ийн утга: ", inputs.email.value);
    console.log("Password-ийн утга: ", inputs.password.value);
    console.log("repeatPassword-ийн утга: ", inputs.repeat.value);
    if(inputs.password.value!=""&&inputs.repeat.value!=""){
      if(inputs.password.value == inputs.repeat.value){
        inputs.password.classList.add("success");
        inputs.repeat.classList.add("success");
        inputs.password.classList.remove("error");
        inputs.repeat.classList.remove("error");
      }
      else {
        
        inputs.password.classList.add("error");
        inputs.repeat.classList.add("error");
        inputs.password.classList.remove("success");
        inputs.repeat.classList.remove("success");
      }

    }
    

    // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
    if (checked(inputs)) {
      document.querySelector("#btn").disabled = false;
    }
  });
}


// button.addEventListener("click",medeelel);
button.addEventListener("click",checked);
