interface Product{productID:number,productName:string,supplier:string,discount?:number}

function showProduct(product:Product):string{
    console.log(`${product.productName}`)
    return `${product.supplier}`
}

console.log(showProduct({'productID':510101,'productName':'Watch','supplier':'Timex','discount':10}));