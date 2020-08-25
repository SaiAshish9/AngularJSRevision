let count = 5;
// count='a'; error type number
let a;
//  any
a = true;
a = 3;
let b;
b = 3;
// number any string boolean number[]=[1,2,3] any[]=[1,true]
var C;
(function (C) {
    C[C["A"] = 0] = "A";
    C[C["B"] = 1] = "B";
})(C || (C = {}));
;
console.log(C.A);
let f = [1, true];
// f=false; error
// f=[true];
console.log(a, b, f);
