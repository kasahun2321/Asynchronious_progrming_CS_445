"use strict";
// var http = require('http');
exports.__esModule = true;
exports.pretty = void 0;
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);
// interface Book {
//     bookName: string;
//     isbn: number;
// }
// class Course {
//     name: string;
//     code: number;
//     constructor(name: string, code: number) {
//         this.name = name;
//         this.code = code;
//     }
//     useBook(book: Book ) {
//         console.log(`Course ${this.name} is using the textbook:
//     ${book.bookName} who's ISBN = ${book.isbn}`);
//     }
// }
// let obj=new Course("jacsode",234)
// console.log(obj)
/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++ same example on ts  varaible and function declaration
 */
//different datatypes of TS programing 
var a = 4; //number datatype
var b = true; //boolean
var c = "kasahun"; //string
var d = [1, "that one", true]; //array with multiple datatype
var e = [1, 2, 3, 4, 5];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
var backgroundcolor = color.blue;
///type assertion or type casting in type script
var message; //at this time the message is any datatype
message = "hello world";
//to assign this ot diff data storage we will have to store into diff var
var swap = message; //first way type assertion
var swap2 = message.endsWith('w'); //second way type assertion 
message = 1;
console.log(typeof message);
console.log(typeof swap);
//
var point = /** @class */ (function () {
    function point() {
    }
    point.prototype.dra = function () {
        console.log(this.xx, "and ", this.yy);
    };
    return point;
}());
var port = new point();
port.xx = 1;
port.yy = 2;
port.dra();
var pretty = /** @class */ (function () {
    function pretty(_a, _b) {
        this._a = _a;
        this._b = _b;
        // this._a=_a;
        // this._b=_b;
    }
    pretty.prototype.sum = function () {
        var summ = (this._a) + (this._b);
        return summ;
    };
    pretty.prototype.set_a = function (val) {
        this._a = val;
    };
    pretty.prototype.get_a = function () {
        return this._a;
    };
    return pretty;
}());
exports.pretty = pretty;
// let kapre=new pretty(23,21)
// console.log(kapre.sum())
// kapre.set_a(1000);// setting up a with setter method
// let res=kapre.get_a();//getting the value of a usinge getter method 
// console.log(res)
// console.log(kapre.sum())
