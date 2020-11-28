// var http = require('http');
var Course = /** @class */ (function () {
    function Course(name, code) {
        this.name = name;
        this.code = code;
    }
    Course.prototype.useBook = function (book) {
        console.log("Course " + this.name + " is using the textbook:\n    " + book.bookName + " who's ISBN = " + book.isbn);
    };
    return Course;
}());
var obj = new Course("jacsode", 234);
console.log(obj);
