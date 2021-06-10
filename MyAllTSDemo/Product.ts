class Product{
    pid:number;
    pname:string;
    category:string;
    qty:number;
    price:number;
    discount:number;

    constructor(pid:number,pname:string,category:string,qty:number,price:number,discount:number)
    {
        this.pid=pid;
        this.pname=pname;
        this.category=category;
        this.qty=qty;
        this.price=price;
        this.discount=discount;
    }

    calculateBill():void{
      let bill=this.qty*this.price;
      let billWithDiscount=bill-(bill*this.discount/100);
      console.log("Product id "+this.pid);
      console.log("Product name "+this.pname);
      console.log("Product category "+this.category);
      console.log("Product qty "+this.qty);
      console.log("Product price "+this.price);
      console.log("Product discount "+this.discount);
      console.log("Product Bill with discount"+billWithDiscount);

    }
}

var obj=new Product(12,"Mobile","Electronics",2,20000,10);
obj.calculateBill();