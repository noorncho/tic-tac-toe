//Board Grid buttons
const gameButtons = document.querySelectorAll(".board_button");;

//Restart buttons
const restartButton = document.querySelector("#restart");

//Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const BoardGridArr = ["", "", "", "", "", "", "", "", ""];

//Counter variables
let turnCounter = 0; //Track player turns
let moveCounter = 0; //Tracks number of moved taken
let isWinner = false;
let currentPlayer = "X"; //X is always the first player

//Win Combos - indexes in the array that have to match to win
const winCombos = [[0, 1, 2], 
                    [3, 4, 5], 
                    [6, 7, 8], 
                    [0, 3, 6], 
                    [1, 4, 7], 
                    [2, 5, 8], 
                    [0, 4, 8], 
                    [2, 4, 6]];


/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(button => {
    button.addEventListener("click", e => {
        const selectedButton = e.target; //Get the that was clicked

        gamePlay(selectedButton);

        // const gridLocation = selectedButton.id;
        
        // BoardGridArr[gridLocation] = "Hello"
        // selectedButton.textContent = "Hi Bitch"
        
        //Disable clicked buttons
        // selectedButton.disabled = true;
        // selectedButton.style.backgroundColor = "red";

        //Check if win combo satisfied
        //checkForWin();
    });
});

restartButton.addEventListener("click", () => {
    restartGame();
});

const gamePlay = (selectedButton) => {
    const gridLocation = selectedButton.id;
    //console.log(currentPlayer);
    
    selectedButton.textContent = currentPlayer;
    BoardGridArr[gridLocation] = currentPlayer;
    selectedButton.disabled = true;
    
    
    checkForWin();
    if(isWinner){
        //Do something to end the game
        console.log(`${currentPlayer} is the winner`);
    }
    
    //Update counter
    turnCounter++;
    //Switch the player
    if(!(turnCounter % 2)){
        currentPlayer = "X";
    }else{
        currentPlayer = "O";
    }
}

/**
 * Restart Function 
 */
const restartGame = () => {
    //Reset Counters and variables
    turnCounter = 0;
    moveCounter = 0;
    isWinner = false;
    currentPlayer = "X";

    //Remove all values from array
    for(let i = 0; i < BoardGridArr.length; i++){
        BoardGridArr[i] = "";
    }

    //Remove text from buttons
    gameButtons.forEach(button =>{ 
        button.textContent = "";
        button.disabled = false;
    });

    // console.log(BoardGridArr);
    // console.log(gameButtons.length);
}

/**
 * Check for a wining combination
 */
const checkForWin = () => {

    //Iterate through grid array and check for win combinations
    for(let i = 0; i < winCombos.length; i++){
        const winCombo = winCombos[i];
        let a = BoardGridArr[winCombo[0]];
        let b = BoardGridArr[winCombo[1]];
        let c = BoardGridArr[winCombo[2]];

        if(a === "" || b === "" || c === ""){
            continue;
        }
        if(a === b && b === c){
            isWinner = true;
            break;
        }
        
    }
}