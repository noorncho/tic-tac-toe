//Board Grid buttons
const gameButtons = document.querySelectorAll(".board_button");;
//Restart buttons
const restartButton = document.querySelector("#restart");
//Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const BoardGridArr = ["", "", "", "", "", "", "", "", ""];
//Counter variables
let turnCounter = 0; //Track player turns
let moveCounter = 0; //Tracks number of moved taken

//console.log(gameButtons)

/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(button => {
    button.addEventListener("click", e => {
        const selectedButton = e.target; //Get the that was clicked
        const gridLocation = selectedButton.id;
        
        BoardGridArr[gridLocation] = "Hello"
        selectedButton.textContent = "Hi Bitch"
    });
});

restartButton.addEventListener("click", () => {
    restartGame();
});


/**
 * Restart Function 
 */
const restartGame = () => {
    //Reset Counters
    turnCounter = 0;
    moveCounter = 0;

    //Remove all values from array
    for(let i = 0; i < BoardGridArr.length; i++){
        BoardGridArr[i] = "";
    }

    //Remove text from buttons
    gameButtons.forEach(button => button.textContent = "");

    console.log(BoardGridArr);
    console.log(gameButtons.length);
}