import products from "../datafile";

const onSale = products.filter((product)=> product.onSale==true);
console.log(onSale);
export default onSale;