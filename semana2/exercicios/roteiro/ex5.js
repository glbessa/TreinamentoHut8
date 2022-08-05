function maior(array)
{
	let maior = array[0];

	for (let i = 1; i < array.length; i++)
	{
		if (maior < array[i])
			maior = array[i];
	}

  return maior;
}

let array = [6, 21, 9, 2, 50, 98, 1];

console.log(maior(array));