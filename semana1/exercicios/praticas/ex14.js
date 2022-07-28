function menor(n1, n2)
{
	if (n1 < n2)
		return n1;
	return n2;
}

let n1 = 1;
let n2 = 2;
let n3 = 3;

let sum = n1 + n2 + n3;
sum -= menor(menor(n1, n2), n3);

console.log(sum);

