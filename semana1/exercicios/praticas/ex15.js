function ordenar(vetorNum)
{
	let vetorFinal = [];
	let indiceMenor;
  	let tamanho = vetorNum.length;
	for (let i = 0; i < tamanho; i++)
	{
		indiceMenor = 0;
		for (let j = 0; j < vetorNum.length; j++)
		{
			if(vetorNum[indiceMenor] > vetorNum[j])
				indiceMenor = j;
		}
		vetorFinal.push(vetorNum[indiceMenor]); // adiciona um item ao final do vetor
		vetorNum.splice(indiceMenor, 1); // remove 1 item a partir de indiceMenor
	}

	return vetorFinal;
}

let vet = [2, 3, 1, 5, 7, 4, 6];
let final = ordenar(vet);

console.log(final);