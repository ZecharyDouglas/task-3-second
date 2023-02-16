import products from "../datafile";

const totalCost = products.reduce((total,product)=> total += product.price,0);

console.log(totalCost);

export default totalCost;