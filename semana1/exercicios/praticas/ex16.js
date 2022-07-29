function maior(n1, n2)
{
	if (n1 > n2)
		return n1;
	return n2;
}

let n1 = 2;
let n2 = 4;
let maiorN = maior(n1, n2);

if (maiorN % (n1 + n2 - maiorN) == 0)
	console.log("São múltiplos");
else
	console.log("Não são múltiplos");