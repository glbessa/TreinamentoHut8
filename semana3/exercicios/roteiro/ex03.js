// Enunciado: Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

let usuario = {
	name: "Gabriel",
	idade: 19,
	telefone: "53 984655136"
}

function verificarMaioridade({ idade })
{
	return idade < 18 ? "Menor de idade" : "Maior de idade";
}

console.log(verificarMaioridade(usuario));