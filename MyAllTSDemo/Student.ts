import {PersonDemo} from "./ClassPerson";
class Student extends PersonDemo{
    qualification:string;

    constructor(fname:string,lname:string,mob:number,qualification:string)
    {
        super(fname,lname,mob)
        this.qualification=qualification;
    }

    Details():void{
        super.display();
        console.log(this.qualification);
    }


}

var studobj=new Student("Mohit","Salunke",9527721566,"BE");
studobj.Details();
