"use strict";

//Board Grid buttons
var gameButtons = document.querySelectorAll(".board_button");
; //Restart buttons

var restartButton = document.querySelector("#restart"); //Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var BoardGridArr = ["", "", "", "", "", "", "", "", ""]; //Counter variables

var turnCounter = 0; //Track player turns

var moveCounter = 0; //Tracks number of moved taken
//Win Combos - indexes in the array that have to match to win

var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var selectedButton = e.target; //Get the that was clicked

    var gridLocation = selectedButton.id;
    BoardGridArr[gridLocation] = "Hello";
    selectedButton.textContent = "Hi Bitch"; //Check if win combo satisfied

    checkForWin();
  });
});
restartButton.addEventListener("click", function () {
  restartGame();
});
/**
 * Restart Function 
 */

var restartGame = function restartGame() {
  //Reset Counters
  turnCounter = 0;
  moveCounter = 0; //Remove all values from array

  for (var i = 0; i < BoardGridArr.length; i++) {
    BoardGridArr[i] = "";
  } //Remove text from buttons


  gameButtons.forEach(function (button) {
    return button.textContent = "";
  });
  console.log(BoardGridArr);
  console.log(gameButtons.length);
};
/**
 * Check for a wining combination
 */


var checkForWin = function checkForWin() {
  console.log("Check for winner"); //Iterate through grid array and check for win combinations

  for (var i = 0; i < winCombos.length; i++) {
    var winCombo = winCombos[i];
    var a = BoardGridArr[winCombo[0]];
    var b = BoardGridArr[winCombo[1]];
    var c = BoardGridArr[winCombo[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      console.log("Winner");
      break;
    }
  }
};