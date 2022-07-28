function categorizar(idade)
{
	if(idade >= 18)
		return 'Adulto';
	else if(idade <= 17 && idade >= 14)
		return 'Juvenil B';
	else if(idade <= 13 && idade >= 11)
		return 'Juvenil A';
	else if(idade <= 10 && idade >= 8)
		return 'Infantil B';
	else if(idade <= 7 && idade >= 5)
		return 'Infantil A';
	else
		return 'Sem categoria';
}

let idade = 9;

console.log(categorizar(idade));