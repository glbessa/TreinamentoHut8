// Enunciado: Crie uma função que recebe uma string (com quatro possibilidades: “soma”,“subtrai”, “divide”, “multiplica”) e dois números. A função deve retornar a operação realizada informada pela string nos dois números.

function calcular(operacao)
{
	switch(operacao)
	{
		case 'soma':
			return somar
		case 'subtrai':
			return subtrair
		case 'divide':
			return dividir
		case 'multiplica':
			return multiplicar
		default:
			return (n1) => (n2) => { return; };
	}
}

function somar(n1)
{
	return (n2) => n1 + n2;
}

function subtrair(n1)
{
	return (n2) => n1 - n2;
}

function dividir(n1)
{
	return (n2) => n1 / n2;
}

function multiplicar(n1)
{
	return (n2) => n1 * n2;
}

console.log(calcular('multiplica')(2)(4));