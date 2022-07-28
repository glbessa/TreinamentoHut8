let l1 = 10;
let l2 = 10;
let l3 = 5;

if (l1 == l2 && l2 == l3)
	console.log("Equilátero");
else if(l1 == l2 || l1 == l3 || l2 == l3)
	console.log("Isóceles");
else
	console.log("Escaleno");