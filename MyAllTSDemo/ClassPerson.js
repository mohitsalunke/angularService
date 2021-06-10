"use strict";
exports.__esModule = true;
exports.PersonDemo = void 0;
var PersonDemo = /** @class */ (function () {
    function PersonDemo(fname, lname, mob) {
        this.fname = fname;
        this.lname = lname;
        this.mob = mob;
    }
    PersonDemo.prototype.display = function () {
        console.log("First Name " + this.fname);
        console.log("Last Name " + this.lname);
        console.log("Mobile " + this.mob);
    };
    return PersonDemo;
}());
exports.PersonDemo = PersonDemo;
var perobj = new PersonDemo("Mohit", "Salunke", 5625664545);
perobj.display();
