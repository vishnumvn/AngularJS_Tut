var pro = require('./Product')
//import pro from 'Product.js';

class Application
{
    static CalculatePrice() //Any name
    {
        let tv = new pro("Sony",50000,1);
        console.log(tv.CalculateAmount());
    }
}

Application.CalculatePrice();