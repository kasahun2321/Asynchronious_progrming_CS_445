"use strict";
var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.Display = function () {
        console.log("x value " + this.x);
        console.log("y value " + this.y);
    };
    return Add;
}());
var add = new Add(10, 20);
add.Display();
