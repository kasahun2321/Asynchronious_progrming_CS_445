// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

interface Book {
    bookName: string;
    isbn: number;
}
class Course {
    name: string;
    code: number;
    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
    useBook(book: Book ) {
        console.log(`Course ${this.name} is using the textbook:
    ${book.bookName} who's ISBN = ${book.isbn}`);
    }
}
let obj=new Course("jacsode",234)
console.log(obj)