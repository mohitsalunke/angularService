"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ClassPerson_1 = require("./ClassPerson");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, lname, mob, qualification) {
        var _this = _super.call(this, fname, lname, mob) || this;
        _this.qualification = qualification;
        return _this;
    }
    Student.prototype.Details = function () {
        _super.prototype.display.call(this);
        console.log(this.qualification);
    };
    return Student;
}(ClassPerson_1.PersonDemo));
var studobj = new Student("Mohit", "Salunke", 9527721566, "BE");
studobj.Details();
