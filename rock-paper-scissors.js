/*rock-paper-scissors*/

function getPlayerChoice(){
    let choice = prompt("Choose: rock, paper or scissors");
    return choice.toLowerCase();
}

function getComputerChoice(){
    const max = 4;
    const min = 1;
    const options = ['rock', 'paper', 'scissors'];

    /*Gets a random number between 4 and 1*/
    var randomNum = Math.floor(Math.random() * (max - min)) + min;

    var computerChoice = options[randomNum-1];

    return computerChoice;
}

function playRound(playerChoice, computerChoice){
    const options = ['rock', 'paper', 'scissors'];
    
    const posibleResults = [ 
             /*rows are player choices and columns are compuer choices*/

              /* rock   paper   scissor */
 /*rock */    [ 'tie', 'lose', 'win' ], 
 /*paper */   [ 'win', 'tie', 'lose' ], 
 /*scissor */ [ 'lose', 'win', 'tie'] 
    ];

    /*
    First we get the index number of player choice and
    the index of computer choice.
    Then the index is stored in a new variable
    */
    var position1 = options.indexOf(playerChoice);
    var position2 = options.indexOf(computerChoice);
    
    /*The indexes stored are used to get the result of the round 
    rows are player choices and columns are compuer choices*/
    var playRoundResult = posibleResults[position1][position2];

    return playRoundResult;
}

function match(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    var playRoundScore= playRound(playerSelection, computerSelection);

    return playRoundScore;
}

/*Executes 5 games*/
function game(){
    //Variable to store the match value
    //1 if player wins, -1 if computer wins, 0 if tie
    var matchResult;

    //Depending con the result, prints if player or computer wins
    var finalResult = 0;

    for(let i=0;i<=4;i++){
        
        matchResult = match();
        
        //Adds score to the finalResult variable
        if(matchResult=='win'){
            console.log("Player wins this match");
            finalResult++;
        }
        else if(matchResult=='lose'){
            console.log("Computer wins this match");
            finalResult--;
        }
        else{
            console.log("Tie!");
        }
    }

    //Presents the winner of the game
    //Player wins if the value is positive
    //Computer wins if value is negative
    if(finalResult>0){
        console.log("Player wins the game");
    }
    else if(finalResult<0){
        console.log("Computer wins the game");
    }
    else{
        console.log("It's a Tie");
    }
}

/*Main*/
game();
