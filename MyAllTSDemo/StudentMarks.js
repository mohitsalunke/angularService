var StudentM = /** @class */ (function () {
    function StudentM(rollno, name, std, marks) {
        this.rollno = rollno;
        this.name = name;
        this.std = std;
        this.marks = marks;
    }
    StudentM.prototype.display = function () {
        console.log("Roll No: " + this.rollno);
        console.log("Name: " + this.name);
        console.log("Std: " + this.std);
        var total = 0;
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("Marks: " + i);
            total = total + i;
        }
        console.log("Total " + total);
        var percentage = (total / 400) * 100;
        console.log("Percentage " + percentage);
        if (percentage >= 70) {
            console.log("Grade = A ");
        }
        else if (percentage <= 69 && percentage >= 50) {
            console.log("Grade = B ");
        }
        else
            (console.log("Grade = C "));
    };
    return StudentM;
}());
var obj = new StudentM(12, "Mohit", 10, [50, 40, 30, 90]);
obj.display();
