let salarioFixo = 2000;
let totalVendas = 100000;
let comissao = 0.02;

let salarioFinal = salarioFixo + totalVendas * comissao;
let formatacao = Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", minimumFractionDigits: 2});

console.log(formatacao.format(salarioFinal));