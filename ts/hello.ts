class Add {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    Display() {
        console.log("x value " + this.x);
        console.log("y value " + this.y);
    }
}

let add = new Add(10, 20);
add.Display()