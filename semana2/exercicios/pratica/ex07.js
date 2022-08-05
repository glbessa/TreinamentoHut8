function fatorial(n)
{
	for (n -= 1; n >= 1; n--)
	{
		n *= (n + 1);
	}

	return n;
}


const v = 10;

for (let p = 0; p <= v; p++)
{
	let linha = "";
	for (let n = v; n >= 0; n--)
	{
		let coeficiente = fatorial(n) / (fatorial(p) * fatorial(n - p));
		linha += `${coeficiente} `;
	}
	linha = linha.slice(0, linha.length - 1);
	console.log(linha);
}