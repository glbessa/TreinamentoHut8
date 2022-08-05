let entrada = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt '];

entrada.forEach(function(value, index, array) { array[index] = value.replaceAll('0', 'o') });
entrada.forEach(function(value, index, array) { array[index] = value.replaceAll('1', 'i') });
entrada.forEach(function(value, index, array) { array[index] = value.replaceAll('3', 'e') });
entrada.forEach(function(value, index, array) { array[index] = value.replaceAll('4', 'a') });
entrada.forEach(function(value, index, array) { array[index] = value.replaceAll('5', 's') });

entrada.forEach(function(value, index, array) { array[index] = value.trim() });

console.log(entrada);