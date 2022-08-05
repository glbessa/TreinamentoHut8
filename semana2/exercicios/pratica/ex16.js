const user = { name: "Marília", age:26, job: "Dev" };

for (let prop in user)
{
	console.log(`O valor da propriedade ${prop} é ${user[prop]}`);
}