console.log("ECOMMERCE");

const productlist = document.querySelector(".productlist");
let allProducts = [];


const displayProduct = () => {
    allProducts.forEach(
        (product) =>{
            const card = `<div class="col-12 col-md-6 col-xl-3 mb-4">
            <div class="card mr-3">
                <img src="${product.thumbnail}" class="card-img-top" style="width:100%; height:200px">
                <div class="card-body">
                    <h5 class="card-title ">${product.title}</h5>
                    <h2 class="card-text">$549.00</h2>
                    <p class="card-text text-truncate">${product.description}</p>
                    <span class="card-text">
                       <div class="row">
                           
                            <div class="col-6">
                               <a href="#" class="btn btn-outline-primary px-2 mx-2 ">
                                <img src="./img/heart.png" alt="">Watch</a>
                             </div>
        
                        </div>
    
                    </span>
    
                </div>
            </div>
        </div>`
            productlist.innerHTML += card;
        }
    
    );
};
const getProducts = async () => {
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    allProducts = data.products;
    displayProduct();
    console.log("Data:", data);
};
getProducts();