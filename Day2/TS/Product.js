"use strict";
function showProduct(product) {
    console.log("" + product.productName);
    return "" + product.supplier;
}
console.log(showProduct({ 'productID': 510101, 'productName': 'Watch', 'supplier': 'Timex', 'discount': 10 }));
