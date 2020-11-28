

/***++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ***   Name   KASAHUN TEHONE  +++++++++  Idno : 111705     +++++++++****
 *** *********  *******************  DEPARTMENT MSD ********************
 ***********************************************************************/

//TS solution for Question 1
class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    /**
     * 
     * @param year which accept number 
     * @returns void no return value
     */
    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`)
    }
}
let miu = new University("MIU", "Computer Science");
miu.graduation(2019);
 
//solution for Question 2

////////////////////////////////////////////////////////////
interface IbankAccount {
    money: number;
    deposit(value:number) :void
 
}
interface Imyself extends IbankAccount {
    name: string;
    hobbies: string[]
}
 
let myself: Imyself = {
    name: "asaad",
    hobbies: ["violine", "cooking"],
    money: 3000,
    /**
     * 
     * @param value number 
     * @returns void no return from this method
     */
    deposit(value) {
        this.money += value;
    }
 
}
myself.deposit(3000); 
console.log(myself);


 
//Question 3
class Car {
    name: string;
    acceleration: number;
    constructor(name: string) {
        this.name = name;
        this.acceleration = 0
 
    }
    /**
     * @param no parameter to pass it is just to print console
     * @returns no return value
     */
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    /**
     * @param speed number 
     * @returns no return value
     */
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
 
let car = new Car("BMW");
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
class BaseObject {
    width: number;
    length: number;
    
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
}
 
class Rectangle extends BaseObject {
    constructor(width: number, length: number){
        super(width, length)
    }
    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(2, 5);
console.log(rectangle.calcSize())






//second way solution  by amanuel// 

{
    class rectangle{ 
        static width: number = 0;
        static length1: number = 0; 
        static calcSize():number { 
            return this.width * this.length1; 
        }; 
    }; 
    rectangle.width = 5; 
    rectangle.length1 = 2; 
    console.log(rectangle.calcSize()); // 10
}