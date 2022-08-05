const users = [
	{ name: 'Marília', age: 26, job: 'Dev' },
	{ name: 'Juca', age: 21, job: 'RH' },
	{ name: 'Flávia', age: 30, job: 'Financeiro' },
	{ name: 'Sérgio', age: 24, job: 'Dev' }
];

let texto = "";

for (let user in users)
{
	users[user].job == 'Dev' ? texto += `${users[user].name} é dev. ` : texto += `${users[user].name} não é dev. `;
}

texto = texto.slice(0, texto.length - 1);

console.log(texto);