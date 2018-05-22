//var pro = require('./Product')
import pro from './Product';

class Application
{
    static PrintProducts(...products)//rest parameters
    {
        products.forEach(e=>console.log(`${e.productName} costs ${e.rate*e.quantity} and ${e.CalculateAmount()}`));
    }
    static CalculatePrice() //Any name
    {
        let tv = new pro("Sony",50000,1);
        let tv2 = new pro("philips",10000,2);
        let tv3 = new pro("Samsung",250000,1);
        Application.PrintProducts(tv,tv2,tv3);
        console.log(tv.CalculateAmount());

        let x = 55;
        let y= 2;

        let sum=(a,b)=>{return Math.pow(a,b)};
        console.log(sum(x,y))
    }
}

Application.CalculatePrice();


//node --experimental-modules Application.mjs to run on experiemtal module mode.
//else use require and rename Application.mjs to Application.js