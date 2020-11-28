```javascript
// function University(name, dept) { 
// 	this.name = name; 
// 	this.dept = dept; 
// 	this.graduation = function(year) { 
// 		 console.log(`Graduating ${this.dept} ${year} students`); 
// 	} 
// } 
// var miu = new Univeristy("MIU", "Computer Science"); 
// miu.graduation(2019);

class university 
{
    name:string;
    dept:string;
    constructor(name:string,dept:string)
    {
        this.name=name;
        this.dept=dept;


    }
    graduation(year:number):void
    {
        console.log(`Graduating ${this.dept} ${year} students`); 
    }

}
let  miu = new university("MIU", "Computer Science"); 
miu.graduation(2019);


// let bankAccount = { 
// 	money: 2000, 
// 	deposit(value) { 
// 		this.money += value; 
// 	} 
// }; 
// let myself = { 
// 	name: "Asaad", 
// 	bankAccount: bankAccount, 
// 	hobbies: ["Violin", "Cooking"] 
// }; 

// myself.bankAccount.deposit(3000); 
// console.log(myself);
 interface bankAccount 
 {
     money:number;
     deposit:(value:number)=>number;
     //checking(balance:number):number
 }
 interface myself 
 {
     name:string;
    hobbies:string[];
 }
  class summery implements bankAccount,myself
  {
      money:number=2000;
      name:string="prof asaad"
      hobbies:string[]=["voiline ","developemnt"];
      constructor()
      {
         // this.name=name;
      }
      deposit(value:number){
          console.log(`i am ${this.name} i love to spent my time with ${this.hobbies} and i have `)
          return this.money+value;
      }



  } 

  let obj=new summery()
console.log(obj.deposit(2300))


// function Car(name) { 
// 	this.name = name; 
// 	this.acceleration = 0; 
// 	this.honk = function() { 
// 		console.log(` ${this.name} is saying: Toooooooooot!`); 
// 	}; 
// 	this.accelerate = function(speed) { 
// 		this.acceleration = this.acceleration + speed; 
// 	} 
// } 
// var car = new Car("BMW"); 
// car.honk(); // BMW is saying: Toooooooooot!
// console.log(car.acceleration); // 0
// car.accelerate(60); 
// console.log(car.acceleration); // 60

class Car
{
    name :string;
    acceleration:number;
    constructor(name:string)
    {
        this.name=name;
        this.acceleration=0

    }
    honk():void
    {
        //console.log(`${this.name}`)
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelarate(speed:number):number
    {
       return this.acceleration = this.acceleration + speed; 
}}
var car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelarate(60); 
console.log(car.acceleration); // 60


// var baseObject = { 
// 	width: 0, 
// 	length: 0 
// }; 
// var rectangle = Object.create(baseObject); 

// rectangle.width = 5; 
// rectangle.length = 2; 

// rectangle.calcSize = function() { 
// 	return this.width * this.length; 
// }; 

// console.log(rectangle.calcSize()); // 10

class baseobject 
{
    width:number;
    length:number;
    constructor(a:number,b:number)
    {
        this.length=b;
        this.width=a;
    }
}
class rectangle extends baseobject
{
    constructor(public width:number,public length:number)
    {
        super(width,length)
        
    }
    calcSize():number
    {
        return this.width*this.length;
    }
}
let oo=new rectangle(12,12)
console.log(oo.calcSize()); // 10
```