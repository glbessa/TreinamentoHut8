function calcularConsumoMedio(combustivelGasto, distancia)
{
	return distancia / combustivelGasto;
}

function calcularTempoViagem(distancia, vel)
{
	return distancia / vel;
}

let distancia = 100;
let velocidade = 80;
let combustivelGasto = 8;

let consumoMedio = calcularConsumoMedio(combustivelGasto, distancia);
let tempoViagem = calcularTempoViagem(distancia, velocidade);

console.log("Consumo médio: " + consumoMedio);
console.log("Tempo de viagem: " + tempoViagem);