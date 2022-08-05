const array = [1, -7, -23, 25, 19, 13, 10, -8, 52, 153, -127];

array.forEach(function(value, index, array) {
	if (value > 0)
		console.log(value);
});