//Board Grid buttons
const gameButtons = document.querySelectorAll(".board_button");;
//Restart buttons
const restartButton = document.querySelector("#restart");
//Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const BoardGridArr = ["", "", "", "", "", "", "", "", ""];

//console.log(gameButtons)

/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(button => {
    button.addEventListener("click", e => {
        const selectedButton = e.target; //Get the that was clicked
        const gridLocation = selectedButton.id;
        
        BoardGridArr[gridLocation] = "Hello"
        selectedButton.textContent = "Hi Bitch"    
        // console.table(BoardGridArr);
    });
});
