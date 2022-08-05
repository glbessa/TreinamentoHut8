const array = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"];
const entrada = "Pedro";

array.find((nome) => { return nome === entrada }) ? console.log(`${entrada} foi encontrado!`) : console.log(`${entrada} não foi encontrado!`);
