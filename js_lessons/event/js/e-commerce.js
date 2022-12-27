console.log("ECOMMERCE");
const addbth = document.querySelector(".btn1");
const subbtn = document.querySelector(".btn2");
const dis = document.getElementById("too");
const stars = document.querySelector('.star');


const productlist = document.querySelector(".productlist");
let allProducts = [];
let cart_products = [];

const displayProduct = () => {
    allProducts.forEach(
        (product) => {
            const card = `<div class="col-12 col-md-6 col-xl-3 mb-4">
            <div class="card mr-3">
                <img src="${product.thumbnail}" class="card-img-top" style="width:100%; height:200px">
                <div class="card-body">
                    <h5 class="card-title ">${product.title}</h5>
                    <h2 class="card-text">$${product.price}</h2>
                    <p class="card-text text-truncate">${product.description}</p>
                    <span class="card-text">
                       <div class="row">
                           
    
                            <div class="col-6"><p class="star" id="star${product.id}" style="color:gold"> ${product.rating}
                           
                            </p>
                            
                               <a href="#" class="btn btn-outline-primary px-2 mx-2 " onclick="">
                                  Add cart<i class="fa-solid fa-cart-shopping"></i></a>
                             </div>
        
                        </div>
    
                    </span>
    
                </div>
            </div>
        </div>`
        productlist.innerHTML += card;
        let rating = product.rating;
        let star = document.getElementById(`star${product.id}`);
        for(let i=0;i<=rating;i++){
            if(rating==parseInt){
            star.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>` }
     else {
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
      </svg>`};

        }
            
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
const dis_cartProducts = () => {
    cart_products.forEach(
        (product) => {
            const cards = `
            <div class="col-12 col-md-6 col-xl-3 mb-4">
            <div class="card mr-3">
                <img src="${product.thumbnail}" class="card-img-top" style="width:100%; height:200px">
                <div class="card-body">
                    <h5 class="card-title ">${product.title}</h5>
                    <h2 class="card-text">$${product.price}</h2>
                    <p class="card-text text-truncate">${product.description}</p>
                   
                    
                    <button class="btn btn2" style="border: transparent; ">-</button>
                    <label id="too">1</label>
                    <button class="btn1" style="border: transparent;">+</button>
                
                </div>
             </div>`
            productlist.innerHTML += cards;
        }
    );
};
const getProducts1 = async () => {
    const responce1 = await fetch("https://dummyjson.com/products");
    const data = await responce1.json();
    cart_products = data.products;
    dis_cartProducts();
    console.log("Data:", data);
};
getProducts1();




stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        star.innerHTML = 'star';
    });
});

// cart deer product nemeh
let product_count = Number(dis.textContent);
addbth.addEventListener("click", (e) => {
    console.log("Clicked", e.target.textContent);
    product_count += 1;
    dis.textContent = product_count;
});
// cart deerree product hasah
subbtn.addEventListener("click", (e) => {
    console.log("Clicked -");
    product_count -= 1;
    dis.textContent = product_count;
});
