export class Author{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }

    display():void{
        console.log("Author name :"+name);

    }
}

