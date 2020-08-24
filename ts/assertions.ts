let msg;
msg='hi';
let endsWithC=(<string>msg).endsWith('i'); 
let anotherWay=(msg as string).endsWith('i');
console.log(endsWithC,anotherWay)

// tsc --t ES6 <>