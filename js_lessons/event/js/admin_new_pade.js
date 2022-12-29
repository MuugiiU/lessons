const titles=document.querySelector(".title");
const categories=document.querySelector(".category");
const prices=document.querySelector(".price");
const addbtn = document.getElementById("bb");
console.log(addbtn);




const huselt = async () => {
   const res =  await fetch("http://192.168.1.220:4040/product",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            title: titles.value,
            category: categories.value,
            price: prices.value,
            imageURL: "url",
            isSpecial: false,
            days: "mo"
        }),
    })
    console.log(res);
    location = "./admin.html";
}

addbtn.addEventListener("click",()=>{
    huselt();
});