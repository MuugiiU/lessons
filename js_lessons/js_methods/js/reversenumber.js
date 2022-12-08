let a=prompt("Гараас урвуулах тоогоо оруулна уу");

const array1 = a.split("");
console.log('array1:', array1);
// "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
console.log(reversed.join());