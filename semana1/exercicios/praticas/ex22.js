let valor = 584;

let notas100 = Math.floor(valor/100);
valor -= notas100 * 100;
let notas50 = Math.floor(valor/50);
valor -= notas50 * 50;
let notas20 = Math.floor(valor/20);
valor -= notas20 * 20;
let notas10 = parseInt(valor/10);
valor -= notas10 * 10;
let notas5 = parseInt(valor/5);
valor -= notas5 * 5;
let notas2 = parseInt(valor/2);

console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");