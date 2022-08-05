let nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let texto = "";

nomes.forEach(function (value, index, array) { texto += `${value}, `});
texto = texto.slice(0, texto.length - 2); // retira o espaco e a virgula inseridos ao final

console.log(texto);