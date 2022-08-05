function formatarNome(str)
{
	let result = '';

	for (let i = 0; i < str.length; i++)
	{
		if (i == 0)
			result += str.charAt(i).toUpperCase();
		else if (str.charAt(i - 1) == ' ')
			result += str.charAt(i).toUpperCase();
		else
			result += str.at(i);
	}

	return result;
}

function formatarCPF(str)
{
	let result = '';
	for (let i = 0; i < str.length; i++)
	{
		if (i == 9)
			result += '-';
		else if ((i) % 3 == 0 && i != 0)
			result += '.';
		result += str.at(i);
	}

	return result;
}

function formatarTel(str)
{
	let result = '(';

	for (let i = 0; i < str.length; i++)
	{
		if (i == 2)
			result += ') ';
		if (i == ( str.length == 10 ? 6 : 7))
			result += '-';
		result += str.at(i);
	}

	return result;
}

const obj = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'};

for (let element in obj)
{
	switch (element)
	{
		case 'nome':
			console.log(formatarNome(obj.nome));
			break;
		case 'cpf':
			console.log(formatarCPF(obj.cpf));
			break;
		case 'telefone':
			console.log(formatarTel(obj.telefone));
			break;
	}
}