export class Point {
    //     private x: number;
    //     private y: number;
    // //    public private protected
    //     constructor(x?: number, y?: number){
    //           this.x=x;
    //           this.y=y;
    //     }
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0) {
            throw new Error("value cannot be less than 0");
            this._x = value;
        }
    }
    draw() {
        console.log(this._x, this._y);
    }
}
// cohesion -> up
// cohesion grouping similar things together
// let getDistance=(pointA:Point,pointB:Point)=>{}
// in ts we  can treat each file as a module 
// module.exports = Point;
