var A = /** @class */ (function () {
    function A() {
        console.log("A");
    }
    return A;
}());
export { A };
var B = /** @class */ (function () {
    function B() {
        console.log("B");
    }
    return B;
}());
export { B };
//this is defout export which can be export in any way.and we can 
// remame it as we want inside js clas wich is impoted to in this case app.js
var C = /** @class */ (function () {
    function C() {
        console.log("C");
    }
    return C;
}());
export default C;
var D = /** @class */ (function () {
    function D() {
        console.log("D");
    }
    return D;
}());
