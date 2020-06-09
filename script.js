let playerScore = 0;
        let computerScore = 0;
        let rounds = 1;

        const playRound = (playerSelection, computerSelection) => {
            if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
                return "You Lose!"
            }else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
                return "You Win!"
            }else if(playerSelection === 'Rock' && computerSelection === 'Rock'){
                return "Tie"
            }else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
                return "You Lose!"
            }else if(playerSelection === 'Paper' && computerSelection === 'Paper'){
                return "Tie"
            }else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
                return "You Lose!"
            }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
                return "You Win!"
            }else if(playerSelection === 'Scissors' && computerSelection === 'Scissors'){
                return "It's a Tie"
            }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
                return "You Win!"
            }
        }

        const computerPlay = () => {
            let compChoice = Math.floor(Math.random() * 3);
            if(compChoice === 1){
                return 'Rock';
            }else if(compChoice === 2){
                return 'Paper';
            }else{
                return 'Scissors';
            }
        }

        const game = () => {
            while(rounds <= 5){
                let choice = prompt("Enter Rock Paper or Scissors").toLowerCase();
                let playerChoice = choice.replace(choice[0], choice[0].toUpperCase());
                let computerChoice = computerPlay();
                let result = playRound(playerChoice, computerChoice)
                if(result === 'You Win!'){
                    alert(`You win Round ${rounds}`)
                    playerScore += 1
                    rounds += 1
                }else if(result === 'You Lose!'){
                    alert(`You lose Round ${rounds}`)
                    computerScore += 1
                    rounds += 1
                }else{
                    alert('Tied Round')
                    rounds += 1
                }
            }

            if(playerScore > computerScore){
                alert( "You win the game")
            }else if(playerScore < computerScore){
                alert("You lose the game")
            }else{
                alert("It's a Tie")
            }
        }

        game();