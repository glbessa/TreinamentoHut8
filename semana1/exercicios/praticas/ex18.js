let v1 = 1;
let v2 = 2;
let v3 = 3;

console.log('V1 = ' + v1);
console.log('V2 = ' + v2);
console.log('V3 = ' + v3);

v1 = [v2, v2 = v1][0];
v3 = [v2, v2 = v3][0];

console.log('V1 = ' + v1);
console.log('V2 = ' + v2);
console.log('V3 = ' + v3);