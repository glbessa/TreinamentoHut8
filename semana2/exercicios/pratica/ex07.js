const v = 10;
let triangulo = [
	[1],
	[1,2,1]
];

for (let p = 2; p < v; p++)
{
	let linha = [1];
	for (let n = 1; n < (triangulo[p-1].length); n++)
	{
		//let coeficiente = fatorial(n) / (fatorial(p) * fatorial(n - p));
		linha.push(triangulo[p - 1][n - 1] + triangulo[p - 1][n]);
	}
	linha.push(1);
	triangulo.push(linha);
}

for (let linha in triangulo)
{
	console.log(triangulo[linha].join(", "));
}
