let calcularDuracao = function(inicio, final) {
	let duracao = 0;

	if (final < inicio)
	{
		duracao += 24 - inicio;
		duracao += final;
	}
	else
	{
		duracao += final - inicio;
	}

	return duracao;
}

let inicio = 22;
let final = 6;
let duracao = 0;

duracao = calcularDuracao(inicio, final);
console.log(duracao);