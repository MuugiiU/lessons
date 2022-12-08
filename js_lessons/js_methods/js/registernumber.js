// let w=prompt("registeriin dugaaraa oruulna uu!")
let w = 'А';
let v= "";
function isCorrectReg(a) {
    if( a[0]==='A') {
     v = "Архангай";
     console.log(v);
    } else if (a[0]==='Б') {
     console.log("Баян-Өлгий");
    } 
    else if (a[0]==='В') {
        console.log("Баянхонгор");
       } 
       else if (a[0]==='Г') {
        console.log("Булган");
       } 
       else if (a[0]==='Д') {
        console.log("Говь-Алтай");
       } 
       else if (a[0]==='Е') {
        console.log("Дорноговь");
       } 
       else if (a[0]==='Ж') {
        console.log("Дорнод");
       } 
       else if (a[0]==='З') {
        console.log("Дундговь");
       } 
       else if (a[0]==='И') {
        console.log("Завхан");
       } 
       else if (a[0]==='Й') {
        console.log("Өвөрхангай");
       } 
       else if (a[0]==='К') {
        console.log("Өмнөговь");
       } 
       else if (a[0]==='Л') {
        console.log("Сүхбаатар");
       } 
       else if (a[0]==='М') {
        console.log("Сэлэнгэ");
       } 
       else if (a[0]==='Н') {
        console.log("Төв");
       } 
       else if (a[0]==='О') {
        console.log("Увс");
       } 
       else if (a[0]==='П') {
        console.log("Ховд");
       } 
       else if (a[0]==='Р') {
        console.log("Хөвсгөл");
       } 
       else if (a[0]==='С') {
        console.log("Хэнтий");
       } 
       else if (a[0]==='Т') {
        console.log("Дархан-Уул");
       } else if (a[0]==='Ф') {
        console.log("Орхон");
       } 
       else if (a[0]==='Х') {
        console.log("Говьсүмбэр");
       } else if (a[0]==='У,Ц') {
        console.log("Улаанбаатар");
       } 
       else {
        console.log("байхгүй байна");
       }
       return console.log(v);
          
}
//  let text=isCorrectReg(a);
 console.log(isCorrectReg(w));

