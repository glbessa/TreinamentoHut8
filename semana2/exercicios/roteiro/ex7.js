const user = [
	{
		name: "Joao",
		skills: ["Javascript", "ReactJS", "Redux"]
	},
	{
		name: "Pedro",
		skills: ["VueJS", "Ruby on Rails", "Elixir"]
	}
];

for (let i = 0; i < user.length; i++)
{
	let hab = "";
	console.log(`Nome: ${user[i].name}`);
	for (let skill in user[i].skills)
	{
		hab += `| ${user[i].skills[skill]} |`;
	}
	console.log(`Habilidades: ${hab}`);
}