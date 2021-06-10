 export class PersonDemo{
    fname:string;
    lname:string;
    mob:number;

    constructor(fname:string,lname:string,mob:number)
    {
        this.fname=fname;
        this.lname=lname;
        this.mob=mob;
    }

  
    display():void{
        console.log("First Name "+ this.fname);
        console.log("Last Name "+ this.lname);
        console.log("Mobile "+ this.mob);
    }
}

var perobj=new PersonDemo("Mohit","Salunke",5625664545);
perobj.display();
