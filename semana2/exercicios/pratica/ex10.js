const notas = [6, 7, 8];
let media = 0;

for (let nota in notas)
{
	media += notas[nota];
}

media /= notas.length;
console.log(media);