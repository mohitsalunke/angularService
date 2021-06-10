var Employee = /** @class */ (function () {
    function Employee(Eid, Ename, Edept) {
        this.Eid = Eid;
        this.Ename = Ename;
        this.Edept = Edept;
    }
    Employee.prototype.display = function () {
        console.log("Employee Id " + this.Eid);
        console.log("Employee  Name " + this.Ename);
        console.log("Employee Department " + this.Edept);
    };
    return Employee;
}());
var empobj = new Employee(12, "Mohit", "ENTC");
empobj.display();
