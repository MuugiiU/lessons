const producttable=document.querySelector(".mur");
let allProducts = [];
console.log(producttable);
const displayProduct=()=>{

    // producttable.innerHTML ="";
    allProducts.forEach((product)=>{
    const productItem =`<tr>
    <td></td>
    <td>${product.title}</td>
    <td>${product.price}</td>
    <td>${product.category}</td>
    <td>${product.isSpecial}</td>
    <td>
    
        <button type="button" class="btn btn-success">Засах</button>
        <button type="button" class="btn btn-danger">Устгах</button> 
    </td>
    </tr>
    `
   producttable.innerHTML+=productItem;
    }
    )

}
 const getAdmin = async () => {
    const responce=await fetch("http://192.168.1.220:4040/product");
    const data=await responce.json();
    console.log(data);
    allProducts=data.product;
    displayProduct();
}
getAdmin();
location = "./admin_new-pade.html";
