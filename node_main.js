"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var kapre = new Node_1.pretty(23, 21);
console.log(kapre.sum());
kapre.set_a(1000); // setting up a with setter method
var res = kapre.get_a(); //getting the value of a usinge getter method 
console.log(res);
console.log(kapre.sum());
