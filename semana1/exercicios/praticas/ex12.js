let nome = "Gabriel";
let servidor = false;
let professor = false;

if (servidor)
{
	if (professor)
		console.log("Parabéns " + nome + "! Você tem acesso a nossa linha de crédito especial!");
	else
		console.log(nome + ", você tem acesso a nossa linha de crédito para servidores.");
}
else
	console.log(nome + " infelizmente você não tem uma linha de crédito disponível.");
