"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, image, amount) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.amount = amount;
    }
    Customer.prototype.toString = function () {
        return this.id + " - " + this.name + " - " + this.image + " - " + this.amount;
    };
    return Customer;
}());
var one = new Customer(22, "Raja", "image of Raja", 25600);
console.log(one.toString());
