"use strict";

//Board Grid buttons
var gameButtons = document.querySelectorAll(".board_button");
; //Restart button

var restartButton = document.querySelector("#restart"); //Game Over Modal

var gameModal = document.querySelector(".modal");
var modalclose = document.querySelector(".modal__close"); //Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var BoardGridArr = ["", "", "", "", "", "", "", "", ""]; //Counter variables

var turnCounter = 0; //Track player turns

var moveCounter = 1; //Tracks number of moved taken

var isWinner = false;
var currentPlayer = "X"; //X is always the first player
//Win Combos - indexes in the array that have to match to win

var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var selectedButton = e.target; //Get the that was clicked

    gamePlay(selectedButton);
  });
});
restartButton.addEventListener("click", function () {
  restartGame();
});
modalclose.addEventListener("click", function () {
  gameModal.style.display = "none";
});
/**
 * 
 * @param {*} selectedButton 
 */

var gamePlay = function gamePlay(selectedButton) {
  var gridLocation = selectedButton.id;
  selectedButton.textContent = currentPlayer;
  BoardGridArr[gridLocation] = currentPlayer;
  selectedButton.disabled = true;
  checkForWin();
  checkGameOver(isWinner);
};
/**
 * Restart Function 
 */


var restartGame = function restartGame() {
  //Reset Counters and variables
  turnCounter = 0;
  moveCounter = 1;
  isWinner = false;
  currentPlayer = "X";
  gameModal.style.display = "none"; //Remove all values from array

  for (var i = 0; i < BoardGridArr.length; i++) {
    BoardGridArr[i] = "";
  } //Remove text from buttons


  gameButtons.forEach(function (button) {
    button.textContent = "";
    button.disabled = false;
  });
};
/**
 * Check for a wining combination
 */


var checkForWin = function checkForWin() {
  //Iterate through grid array and check for win combinations
  for (var i = 0; i < winCombos.length; i++) {
    var winCombo = winCombos[i];
    var a = BoardGridArr[winCombo[0]];
    var b = BoardGridArr[winCombo[1]];
    var c = BoardGridArr[winCombo[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      isWinner = true;
      break;
    }
  }
};
/**
 * 
 * @param {*} isWinner 
 */


var checkGameOver = function checkGameOver(isWinner) {
  if (isWinner) {
    document.getElementById("overlay__content").innerHTML = "".concat(currentPlayer, " is the winner");
    gameModal.style.display = "block";
    gameButtons.forEach(function (button) {
      return button.display = true;
    });
  } else if (moveCounter == 9) {
    document.getElementById("overlay__content").innerHTML = "Game Draw";
    gameModal.style.display = "block";
    gameButtons.forEach(function (button) {
      return button.display = true;
    });
  } else {
    moveCounter++; //Update counter

    turnCounter++; //Switch the player

    if (!(turnCounter % 2)) {
      currentPlayer = "X";
    } else {
      currentPlayer = "O";
    }
  }
};