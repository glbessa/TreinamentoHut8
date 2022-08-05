let vetor = [5, 9, 10, 6];
let sum = 0;

for (let i = 0; i < vetor.length; i++)
{
	sum += vetor[i] * i;
}

console.log(`Soma = ${sum}`);