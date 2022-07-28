
function calcularPreco(precoEtiqueta, formaPagamento)
{
	switch(formaPagamento)
	{
		// a vista em dinheiro ou cheque, recebe 10% de desconto
		case 1:
			return precoEtiqueta * (1 - 0.1);
		// a vista no cartão de crédito, recebe 15% de desconto
		case 2:
			return precoEtiqueta * (1 - 0.15);
		// em duas vezes, preço normal de etiqueta sem juros
		case 3:
			return precoEtiqueta;
		// em três vezes, preço normal de etiqueta mais juros de 10%
		case 4:
			return precoEtiqueta * (1 + 0.1);
		default:
			return 0;
	}
}

let precoEtiqueta = 100;
let formaPagamento = 4;
let formatacao = new Intl.NumberFormat("pt-br", {minimumFractionDigits: 2})

console.log(formatacao.format(calcularPreco(precoEtiqueta, formaPagamento)));