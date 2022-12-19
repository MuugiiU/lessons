let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart.unshift('Sugar'));
console.log(shoppingCart);
console.log(shoppingCart.pop());
console.log(shoppingCart);
let count = [];
for (let i = 0; i <= shoppingCart.length; i++) {
    if (shoppingCart[i] === 'Tea') {
        shoppingCart[i] = shoppingCart[i].replaceAll("Tea", "Green Tea");
 }
}
console.log(shoppingCart);