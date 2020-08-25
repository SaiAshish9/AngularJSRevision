// interface Point {
//     x: number,
//     y: number,
//     draw:()=>void
// }
import { Point } from './point';
// !point.ts
let point = new Point(1, 3);
point.x = 1;
console.log(point.x);
point.draw();
// let drawPoint=(point:Point) => {
// }
