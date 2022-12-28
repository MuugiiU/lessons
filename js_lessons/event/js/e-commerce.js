console.log("ECOMMERCE");
// html-eesee barij avch bg heseg
const addbth = document.querySelector(".btn1");
const subbtn = document.querySelector(".btn2");
const dis = document.getElementById("too");
const stars = document.querySelector('.star');
const cartCount = document.querySelector(".cartCount");
const category = document.querySelector(".dropdown-menu");
const menu=document.querySelector(".a-menu");
const cartList = document.querySelector(".cartList");
const productlist = document.querySelector(".productlist");

const num=document.querySelector(".num")
//  hooson [] zarlag onoohod belej bg 
let allProducts = [];
let cart_products = [];
    //  display deeree product-aa hevlej bg davtalt ashiglan
const displayProduct = () => {
    allProducts.forEach(
        (product, idx) => {
            const card = `<div class="col-12 col-md-6 col-xl-3 mb-4">
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
                            <button class="btn btn-outline-primary px-2 mx-2 " onclick="addcart(${idx})">
                                  Add cart<i class="fa-solid fa-cart-shopping"></i></button>
                             </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>`
            productlist.innerHTML += card;

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
//  dummy-gaasaa productaa salgaj abch bg function
const getProducts = async () => {
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    allProducts = data.products;
    displayProduct();
    console.log("Data:", data);
};

getProducts();
 // my cartdaa productaa nemj bg heseg davtalt ashiglan    
const dis_cartProducts = () => {
    cartList.innerHTML = " ";
    cart_products.forEach(
        (product) => {
            const cartItem = `
            <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"style="width:150px"><img class="img-fluid " src="${product.thumbnail}"></div>
                            <div class="col">
                                <div class="row text-muted" style="font-size:16px">${product.title}</div>
                                <div class="row"></div>
                            </div>
                            <div class="col">
                                <button class="sub" onclick="hasah()" style="border:none">-</button>
                                <button class="num" style="border:none">1</button>
                                <button class="count" onclick="count(this)" style="border:none">+</button>
                            </div>
                            <div class="col" style="color:blue">$${product.price}</div>
                        </div>
                    </div>`;
            cartList.innerHTML += cartItem;
        }
    );
};
//  my cartdaa productaa hevlej bg
dis_cartProducts();

const addcart = (idx) => {
    console.log("aaa");
    cart_products.push(allProducts[idx]);
    console.log(cart_products);
    cartCount.innerHTML = cart_products.length;
    dis_cartProducts();
    const tp = calculateTotal();
    console.log(tp);

}

//  display deeree category uusgej bg
let allCategory = [];
const displayCategory = (dt) => {
    console.log("data:", dt);
    dt.forEach(
        (ct, idx) => {
            const menus=`<li ><a href=""class="menu" style="color:blue; text-decoration: none">${ct}</a></li>`
            menu.innerHTML += menus;
            const categoryList = ` <li><button class="dropdown-item category">${ct}</button></li>`
            category.innerHTML += categoryList;

        })
};

// category-goo dummy-gaasaaa salgaj abch bg
const getCategory = async () => {
    const responce = await fetch("https://dummyjson.com/products/categories");
    const data = await responce.json();
    console.log(data);
    displayCategory(data);
   
};
getCategory();

//  nemeh button
const count=()=>{
   
    
}
// hasah button
const hasah=()=>{
   
}

// product count and niilber
const calculateTotal = () => {
    const total = cart_products.reduce((total,product)=>{
        return total+product.price*product.coun
    },0);
    return total;
}




// $('#products').pagination = async()=> {
//     const page = await fetch( "https://dummyjson.com/products");
//     locator: 'product',
//     totalNumber: 100,
//     pageSize: 20,
//     ajax: {
//          function() {
//             dataContainer.html('categories');
//         }
//     },
//      pageSize function(data, pagination) {
//         // template method of yourself
//         let html = template(data);
//         dataContainer.html(html);
//     }
// })