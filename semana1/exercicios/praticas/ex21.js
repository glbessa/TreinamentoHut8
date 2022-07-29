function calculate(str, x1, x2)
{
	switch(str)
	{
		case "soma":
			return x1 + x2;
		case "subtrai":
			return x1 - x2;
		case "multiplica":
			return x1 * x2;
		case "divide":
			if (x2 == 0)
				return 0;
			return x1 / x2;
		default:
			return 0;
	}
}

console.log(calculate("soma", 10, 10));