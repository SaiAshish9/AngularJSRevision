// interface Point {
//     x: number,
//     y: number,
//     draw:()=>void
// }
class Point {
    draw() {
        console.log(this.x, this.y);
    }
    getDistance(another) {
    }
}
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
// let drawPoint=(point:Point) => {
// }
// cohesion grouping similar things together
