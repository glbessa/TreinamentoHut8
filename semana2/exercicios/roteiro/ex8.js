function rockPaperScissorsWinner(player1, player2)
{
	if (player1 == player2)
	{
		return "Empate!";
	}
	
	switch(player1)
	{
		case 0:
			switch(player2)
			{
				case 1:
					return "Jogador 1 ganhou!";
				case 2:
					return "Jogador 2 ganhou!";
			}
		case 1:
			switch(player2)
			{
				case 0:
					return "Jogador 2 ganhou!";
				case 2:
					return "Jogador 1 ganhou!";
			}
		case 2:
			switch(player2)
			{
				case 0:
					return "Jogador 1 ganhou!";
				case 1:
					return "Jogador 2 ganhou!";
			}
	}
}

let player1 = Math.floor(Math.random() * 3);
let player2 = Math.floor(Math.random() * 3);

console.log(rockPaperScissorsWinner(player1, player2));