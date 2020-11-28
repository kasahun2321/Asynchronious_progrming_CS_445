import C, { A, B } from './module';
// C is defoult export so we can rename it what ever we want 
// in one module we have only single defoult export 
// and have multiple named export  named export must be same name with the class we declared inside js file
// to execute the code call all the class imported
new A();
new B();
new C();
console.log("ello this is ts file first");
console.log("yes sir it is working");
