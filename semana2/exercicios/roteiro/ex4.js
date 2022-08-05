let usuario = {
	name: 'Gabriel',
	projects: [
		{
			name: 'Projeto de pesquisa',
			active: true
		},
		{
			name: 'Projeto de extensão',
			active: false
		},
		{
			name: 'Projeto de ensino',
			active: false
		},
		{
			name: 'Monitoria',
			active: false
		}
	]
};

for (let i = 0; i < usuario.projects.length; i++)
{
	console.log(`${usuario.name} -> ${usuario.projects[i].name} : ${usuario.projects[i].active}`);
}