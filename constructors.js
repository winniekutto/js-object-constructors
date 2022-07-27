function Book(title,author,noOfPages,read){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.read = read;
}
Book.prototype.info = function(){
    return this.title + ' by ' + this.author + ' , has '
+ this.noOfPages + ' pages.' +'This book has been ' + this.read
}
Book.prototype.print=function(){
    return this.toString()
}
let book = new Book ('The Pearl','Shakespear','85' ,'read');
console.log(Book)
book.info()