import {Author} from "./Author"

class Book{
    bookid:number;
    bnm:string;
    price:number;
    author:Author;

    constructor(bookid:number,bnm:string,price:number,author:Author)
    {
        this.bookid=bookid;
        this.bnm=bnm;
        this.price=price;
        this.author=author;
    }

    details():void
    {
        console.log("Bookid "+this.bookid);
        console.log("BookName "+this.bnm);
        console.log("Book Price "+this.price);
        console.log("Author "+this.author);


    }


   


    
}