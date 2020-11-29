// var http = require('http');

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
 let a:number =4//number datatype
 let b:boolean=true//boolean
 let c:string="kasahun"//string
 let d:any[]=[1,"that one",true]//array with multiple datatype
 let e:number[]=[1,2,3,4,5]
 enum color{
     red=0,
     green=2,
     blue=3

 }
 let backgroundcolor=color.blue;


 ///type assertion or type casting in type script
 let message;//at this time the message is any datatype
 message="hello world"
 //to assign this ot diff data storage we will have to store into diff var
 let swap=<string>message;//first way type assertion
 let swap2=(message as string).endsWith('w');//second way type assertion 
 message=1;
 console.log(typeof message)

 console.log(typeof swap)

 

 //
 class point
 {
    xx:number;
    yy:number;
    dra()
    {
        console.log(this.xx,"and ", this.yy)
    }
 }

 let port:point=new point()
 port.xx=1
 port.yy=2
 port.dra();

 export class pretty
 {
     constructor(private _a?:number,private _b?:number)
     {
        // this._a=_a;
        // this._b=_b;
     }
     sum():number
     {

        let  summ= (this._a) + (this._b);
         return summ
     }
     set_a(val)
     {
         this._a=val;
     }
     get_a()
     {
         return this._a;
     }

    }
    // let kapre=new pretty(23,21)
    // console.log(kapre.sum())
    
    // kapre.set_a(1000);// setting up a with setter method
    // let res=kapre.get_a();//getting the value of a usinge getter method 
    // console.log(res)
    // console.log(kapre.sum())