import products from "../datafile";

const productNames = products.map((product) => product.name);
console.log(productNames);

export default productNames;