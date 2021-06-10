interface IBook
{
    ListDetails():void;
}

class Book implements IBook
{
    bookname:string;
    author:string;

    constructor(bookname:string,author:string)
    {
        this.bookname=bookname;
        this.author=author;
    }

    ListDetails():void{
        console.log("Book Name "+ this.bookname);
        console.log("Author "+this.author);
    }
}

var bookobj=new Book("Jungle","Mohit");
bookobj.ListDetails();