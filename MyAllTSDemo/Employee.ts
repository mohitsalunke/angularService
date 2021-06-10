class Employee{
    Eid:number;
    Ename:string;
    Edept:string;

    constructor(Eid:number,Ename:string,Edept:string)
    {
        this.Eid=Eid;
        this.Ename=Ename;
        this.Edept=Edept;

    }

    display():void{
        console.log("Employee Id "+this.Eid);
        console.log("Employee  Name "+this.Ename);
        console.log("Employee Department "+this.Edept);

    }
}

var empobj=new Employee(12,"Mohit","ENTC");
empobj.display();