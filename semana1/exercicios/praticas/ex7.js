let v1 = 1;
let v2 = 2;

console.log("v1 = " + v1);
console.log("v2 = " + v2);

v1 = [v2, v2 = v1][0];

console.log("v1 = " + v1);
console.log("v2 = " + v2);