/***++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ***   Name   KASAHUN TEHONE  +++++++++  Idno : 111705     +++++++++****
 *** *********  *******************  DEPARTMENT MSD ********************
 ***********************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//TS solution for Question 1
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    /**
     *
     * @param year which accept number
     * @returns void no return value
     */
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University;
}());
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
var myself = {
    name: "asaad",
    hobbies: ["violine", "cooking"],
    money: 3000,
    /**
     *
     * @param value number
     * @returns void no return from this method
     */
    deposit: function (value) {
        this.money += value;
    }
};
myself.deposit(3000);
console.log(myself);
//Question 3
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    /**
     * @param no parameter to pass it is just to print console
     * @returns no return value
     */
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    /**
     * @param speed number
     * @returns no return value
     */
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
//TS solution for Question 4
/**
 * this class have two parameter
 * @ param : width number datatype
 * @ param : length number datatype
 */
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(2, 5);
console.log(rectangle.calcSize());
//second way solution  by amanuel// 
{
    var rectangle_1 = /** @class */ (function () {
        function rectangle() {
        }
        rectangle.calcSize = function () {
            return this.width * this.length1;
        };
        ;
        rectangle.width = 0;
        rectangle.length1 = 0;
        return rectangle;
    }());
    ;
    rectangle_1.width = 5;
    rectangle_1.length1 = 2;
    console.log(rectangle_1.calcSize()); // 10
}
