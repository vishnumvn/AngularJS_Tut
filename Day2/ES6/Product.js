class Product{
    constructor(productName,rate,quantity){
        this.productName=productName;
        this.rate = rate;
        this.quantity = quantity;
    }

    CalculateAmount()
    {
        return `The cost of ${this.productName} is ${this.quantity*this.rate}`;
    }
}

module.exports = Product;