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
// {
//     "customers": [
//       {
//         "id": 1,
//         "name": "HP",
//         "image": "images/HP",
//         "amount": "10000"
//       },
//       {
//         "id": 2,
//         "name": "CISCO",
//         "image": "images/CISCO",
//         "amount": "5000"
//       },
//       {
//         "id": 3,
//         "name": "CA",
//         "image": "images/CA",
//         "amount": "5000"
//       },
//       {
//         "id": 4,
//         "name": "Adobe",
//         "image": "images/Adobe",
//         "amount": "10500"
//       }
//     ]
//   }
