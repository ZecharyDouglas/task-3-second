import products from "../datafile";

const productNames = products.map(product => {return product.name});
console.log([productNames]);

export default productNames;