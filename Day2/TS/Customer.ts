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