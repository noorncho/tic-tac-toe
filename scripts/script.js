//Board Grid buttons
const gameButtons = document.querySelectorAll(".board_button");;

//Restart button
const restartButton = document.querySelector("#restart");

//Game Over Modal
const gameModal = document.querySelector(".modal");
const modalclose = document.querySelector(".modal__close");

//Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const BoardGridArr = ["", "", "", "", "", "", "", "", ""];

//Counter variables
let turnCounter = 0; //Track player turns
let moveCounter = 1; //Tracks number of moved taken
let isWinner = false;
let currentPlayer = "X"; //X is always the first player or the human

//Solo Player Mode - Variables
const singlePlayerButton = document.getElementById("single-player");
let singlePlayerMode = false;
let computerMove;// = Math.floor(Math.random() * 9); //Generate number - [0, 1, 2, 3, 4, 5, 6, 7, 8]

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
        singlePlayerButton.disabled = true; // Disabled if player does not selected before first move
        document.getElementById("player-mode").innerHTML = "Two Player Mode Activated";

        gamePlay(selectedButton);
    });
});

restartButton.addEventListener("click", () => {
    restartGame();
});

modalclose.addEventListener("click", () => {
    gameModal.style.display = "none"
});

singlePlayerButton.addEventListener("click", () => {
    console.log("Single Player mode activated");
    document.getElementById("player-mode").innerHTML = "Single Player Mode Activated";
    singlePlayerMode = true;
    singlePlayerButton.disabled = true;
});


/**
 * 
 * @param {*} selectedButton 
 */
const gamePlay = (selectedButton) => {
    const gridLocation = selectedButton.id;
    
    selectedButton.textContent = currentPlayer;
    BoardGridArr[gridLocation] = currentPlayer;
    selectedButton.disabled = true;

    checkForWin();

    if(singlePlayerMode){
        soloPlayerMode();
        checkForWin();
    }

    //checkGameOver(isWinner);
}

/**
 * Restart Function 
 */
const restartGame = () => {
    //Reset Counters and variables
    turnCounter = 0;
    moveCounter = 1;
    isWinner = false;
    currentPlayer = "X";

    gameModal.style.display = "none";

    //Remove all values from array
    for(let i = 0; i < BoardGridArr.length; i++){
        BoardGridArr[i] = "";
    }

    //Remove text from buttons
    gameButtons.forEach(button =>{ 
        button.textContent = "";
        button.disabled = false;
    });
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

    checkGameOver(isWinner);
}

/**
 * 
 * @param {*} isWinner 
 */
const checkGameOver = (isWinner) =>{

    if(isWinner){
        document.getElementById("overlay__content").innerHTML = `${currentPlayer} is the winner`;
        gameModal.style.display = "block";
        gameButtons.forEach(button => button.disabled = true);
    }else if(moveCounter == 9){
        document.getElementById("overlay__content").innerHTML = "Game Draw";
        gameModal.style.display = "block";
        gameButtons.forEach(button => button.disabled = true);
    }else{
        moveCounter++;
        //Update counter
        turnCounter++;
        //Switch the player
        if(!(turnCounter % 2)){
            currentPlayer = "X";
        }else{
            currentPlayer = "O";
        }
    }
}

const soloPlayerMode = () => {
    let computerTurn = true;
    
    /*while(computerTurn){
        //Generate a new location for next move
        computerMove = Math.floor(Math.random() * 9);
        console.log(computerMove);
        if(BoardGridArr[computerMove] === "" && !gameButtons[computerMove].disabled){
            gameButtons[computerMove].textContent = currentPlayer;
            BoardGridArr[computerMove] = currentPlayer;
            gameButtons[computerMove].disabled = true;
            computerTurn = false;
        }
    }*/
    do{
        computerMove = Math.floor(Math.random() * 9);
        console.log(computerMove);
        if(BoardGridArr[computerMove] === "" && !gameButtons[computerMove].disabled){
            gameButtons[computerMove].textContent = currentPlayer;
            BoardGridArr[computerMove] = currentPlayer;
            gameButtons[computerMove].disabled = true;
            computerTurn = false;
        }

    }while(computerTurn);

    console.log(computerTurn);
}