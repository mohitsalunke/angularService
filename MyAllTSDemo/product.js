var Product = /** @class */ (function () {
    function Product(pid, pname, category, qty, price, discount) {
        this.pid = pid;
        this.pname = pname;
        this.category = category;
        this.qty = qty;
        this.price = price;
        this.discount = discount;
    }
    Product.prototype.calculateBill = function () {
        var bill = this.qty * this.price;
        var billWithDiscount = bill - (bill * this.discount / 100);
        console.log("Product id " + this.pid);
        console.log("Product name " + this.pname);
        console.log("Product category " + this.category);
        console.log("Product qty " + this.qty);
        console.log("Product price " + this.price);
        console.log("Product discount " + this.discount);
        console.log("Product Bill with discount" + billWithDiscount);
    };
    return Product;
}());
var obj = new Product(12, "Mobile", "Electronics", 2, 20000, 10);
obj.calculateBill();
