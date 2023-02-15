import products from "../datafile";

const totalCost = products.reduce((total,product)=> {return total += product},0);
console.log(totalCost);

export default totalCost;