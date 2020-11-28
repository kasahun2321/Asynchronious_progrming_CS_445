"use strict";
var university = /** @class */ (function () {
    function university(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    university.prototype.graduation = function (year) {
        console.log("graduating " + this.dept + year);
    };
    return university;
}());
