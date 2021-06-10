class StudentM{
    rollno:number;
    name:string;
    std:number;
    marks:number[]

    constructor(rollno:number,name:string,std:number,marks:number[])
    {
          this.rollno=rollno;
          this.name=name;
          this.std=std;
          this.marks=marks;
    }

    display():void{
        console.log("Roll No: "+this.rollno);
        console.log("Name: "+this.name);
        console.log("Std: "+this.std);
        let total=0;
        for(let i of this.marks)
        {
            console.log("Marks: "+i); 
            total=total+i;

        }
        console.log("Total "+total);
        var percentage=(total/400)*100;
        console.log("Percentage "+percentage);
        if(percentage>=70)
        {
            console.log("Grade = A ")
        }
        else if(percentage<=69 && percentage>=50)
        {
            console.log("Grade = B ")
        }
        else(
            console.log("Grade = C ")
        )

    }

   
     


}

var obj=new StudentM(12,"Mohit",10,[50,40,30,90]);
obj.display();