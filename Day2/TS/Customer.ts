class Customer{

    private id:number;
    private name:string;
    private image:string;
    private amount: number;

    constructor(id:number,name:string,image:string,amount:number)
    {
        this.id=id;
        this.name=name;
        this.image=image;
        this.amount=amount;
    }

    toString():string{
        return `${this.id} - ${this.name} - ${this.image} - ${this.amount}`;
    }
   
}

let one = new Customer(22,"Raja","image of Raja",25600);
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