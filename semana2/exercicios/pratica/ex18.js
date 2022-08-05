const compras = [
	{ nome: 'maçã', quantidade: 2, valor: 0.5},
	{ nome: 'alface', quantidade: 1, valor: 1.73},
	{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
	{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
];

let sum = 0;

for (let compra in compras)
	sum += compras[compra].quantidade * compras[compra].valor;

console.log(`O valor total é R$ ${sum}`);