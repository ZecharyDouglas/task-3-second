import products from "../datafile";

const productsSorted = products.sort((a,b)=>(a.price > b.price ? 1 : -1));
console.log(productsSorted);
export default productsSorted;