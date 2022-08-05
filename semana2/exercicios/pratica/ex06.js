let nPares = 0;
let nImpares = 0;
let nPositivos = 0;
let nNegativos = 0;

const array = [-5,0,-3,-4,12];

array.forEach(function (value) {
	value % 2 == 0 ? nPares++ : nImpares++;
	if (value != 0)
		value < 0 ? nNegativos++ : nPositivos++;
});

console.log(`Pares = ${nPares}`);
console.log(`Impares = ${nImpares}`);
console.log(`Positivos = ${nPositivos}`);
console.log(`Negativos = ${nNegativos}`);