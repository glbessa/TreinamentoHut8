function indiceMenorElemento(array)
{
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++)
        if (array[indiceMenor] > array[i])
            indiceMenor = i;

    return indiceMenor;
}

const entrada = [1,2,3,4,-5,6,7,8,9,10];
let indice = indiceMenorElemento(entrada);
let elemento = entrada[indice];

console.log(`Menor valor: ${elemento}`);
console.log(`Posição: ${indice}`);