console.log("ECOMMERCE");
// html-eesee barij avch bg heseg

const stars = document.querySelector('.star');  //rating 
const cartCount = document.querySelector(".cartCount");
const categoryList = document.querySelector(".categoryList");
const menu = document.querySelector(".a-menu");
const cartList = document.querySelector(".cartList");
const productlist = document.querySelector(".productlist");
const cartPrice = document.querySelector(".cartPrice");

// const num = document.querySelector(".num")
//  hooson [] zarlag onoohod belej bg 
 
let cartProducts = [];
//  display deeree product-aa hevlej bg davtalt ashiglan
const displayProduct = () => {
    productlist.innerHTML =" ";
    allProducts.forEach((product, idx) => {
            const productItem = `<div class="col-12 col-md-6 col-xl-3 mb-4 hoverable hover-shadow-1-soft">
            <div class="card mr-3">
                <img src="${product.thumbnail}" class="card-img-top" style="width:100%; height:200px">
                <div class="card-body">
                    <h5 class="card-title ">${product.title}</h5>
                    <h2 class="card-text">$${product.price}</h2>
                    <p class="card-text text-truncate">${product.description}</p>
                    <span class="card-text">
                       <div class="row">
                           <div class="col-6">
                           <p class="star" id="star${product.id}" style="color:gold"> ${product.rating}</p>
                            <button class="btn btn-outline-primary px-2 mx-2 " onclick="addCart(${product.id})">
                                  Add cart<i class="fa-solid fa-cart-shopping"></i></button>
                             </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>`
            productlist.innerHTML += productItem;

            //  star rating uusgej bg
            let rating = product.rating;
            let star = document.getElementById(`star${product.id}`);
            for (let i = 0; i <= parseInt(rating); i++) {
                star.innerHTML += `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>` }
        }

    );
};

let allCategory = [];
const displayCategory = () => {
    categoryList.innerHTML = "";
  allCategories.forEach((category) =>{
    const categoryItem = ` <li><button onclick="getCategoryProduct('${category}')" class="btn btn-primary">${category}</button></li>`
      categoryList.innerHTML += categoryItem;

       
            const menus = `<li ><a href=""class="menu" style="color:blue; text-decoration: none onclick="getCategoryProduct('${category}') ">${category}</a></li>`
            menu.innerHTML += menus;
           
        })
};

// category-goo dummy-gaasaaa salgaj abch bg
const getCategories = async () => {
    const responce = await fetch("https://dummyjson.com/products/categories");
    const data = await responce.json();
    allCategories = data;
    displayCategory();

};

const getCategoryProduct = async (category) => {
    console.log(category);
    const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
    );
    const data = await response.json();
    allProducts = data.products;
    displayProduct();
};

//  dummy-gaasaa productaa salgaj abch bg function


const getProducts = async () => {
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    allProducts = data.products;
    displayProduct();
    displayCart();

  
};
getCategories();
getProducts();

const addCart = (productId) => {
    const findIdx = cartProducts.findIndex((item) => item.id === productId);
    if (findIdx > -1) {
      //ene baraa cartProducts array dotor bval nemehgui harin baraanii too hemjee nemne
      cartProducts[findIdx].count += 1;
    } else {
      //bhgui bol baraag nemne
      const findIndex = allProducts.findIndex((item) => item.id === productId);
  
      const newBaraa = { count: 1, ...allProducts[findIndex] };
      cartProducts.push(newBaraa);
    }
    cartCount.innerText = cartProducts.length;
    displayCart();
  };
// my cartdaa productaa nemj bg heseg davtalt ashiglan  

// product count and niilber
const calculateCartPrice = () => {

    let sumPrice = 0;
    for (product of cartProducts) {
         sumPrice = sumPrice + product.price * product.count;
        }
      return sumPrice;
};

const displayCart = () => {
    cartList.innerHTML = " ";
    for(product of cartProducts){
            const cartItem = `
            <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"style="width:150px"><img class="img-fluid " src="${product.thumbnail}"></div>
                            <div class="col">
                                <div class="row text-muted" style="font-size:16px">${product.title}</div>
                                <div class="row"></div>
                            </div>
                            
                            <div class="col" style="color:blue">$${product.price}</div>
                            <div class="">
                            <input class="form-control" min="0" id="quantity" value="${product.count}" type="number" />
                          </div>
                        </div>
                    </div>`;
            cartList.innerHTML += cartItem;
        }
    const totalCartPrice=calculateCartPrice ();
    cartPrice.innerText=`$${totalCartPrice}`;
};
//  my cartdaa productaa hevlej bg

