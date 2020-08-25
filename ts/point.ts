export class Point {
  //     private x: number;
  //     private y: number;
  // //    public private protected
  //     constructor(x?: number, y?: number){
  //           this.x=x;
  //           this.y=y;
  //     }
  constructor(private _x?: number, private _y?: number) {}
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
  // getDistance(another:Point){
  // }
}
// cohesion -> up
// cohesion grouping similar things together
// let getDistance=(pointA:Point,pointB:Point)=>{}

// in ts we  can treat each file as a module 
// module.exports = Point;