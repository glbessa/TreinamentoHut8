function media(array)
{
    let sum = 0;
    for (let i in array)
    {
        sum += array[i];
    }

    return sum / array.length;
}

const estudantes = [
    {
        nome: 'Marcos', 
        notas: [10, 7, 2]
    },
    {
        nome: 'Michele', 
        notas: [10, 10, 10]
    },
    {
        nome: 'Pedro', 
        notas: [3, 10, 9]
    },
    {
        nome: 'Andressa', 
        notas: [6, 6, 8]
    },
    {
        nome: 'Cristiana', 
        notas: [7, 9, 2]
    }
];

//let aprovados = [];

for (let estudante in estudantes)
{
    if(media(estudantes[estudante].notas) >= 7)
    {
        //aprovados.push(estudantes[estudantes].nome);
        console.log(estudantes[estudante].nome);
    }
}

