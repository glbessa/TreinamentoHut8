let array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

array.forEach(function (value, index, array) {
	array[index] *= 10;
});

console.log(array);