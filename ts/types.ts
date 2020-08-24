let count=5;
// count='a'; error type number

let a;
//  any
a=true;
a=3;

let b:number;
b=3;
// number any string boolean number[]=[1,2,3] any[]=[1,true]

enum C{
A,B
};

console.log(C.A)

let f:any[]=[1,true];
// f=false; error
// f=[true];

console.log(a,b,f)
