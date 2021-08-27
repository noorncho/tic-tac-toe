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
var currentPlayer = "X"; //X is always the first player or the human
//Solo Player Mode - Variables

var singlePlayerButton = document.getElementById("single-player");
var singlePlayerMode = false;
var computerMove; // = Math.floor(Math.random() * 9); //Generate number - [0, 1, 2, 3, 4, 5, 6, 7, 8]
//Win Combos - indexes in the array that have to match to win

var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var selectedButton = e.target; //Get the that was clicked

    singlePlayerButton.disabled = true; // Disabled if player does not selected before first move

    document.getElementById("player-mode").innerHTML = "Two Player Mode Activated";
    gamePlay(selectedButton);
  });
});
restartButton.addEventListener("click", function () {
  restartGame();
});
modalclose.addEventListener("click", function () {
  gameModal.style.display = "none";
});
singlePlayerButton.addEventListener("click", function () {
  console.log("Single Player mode activated");
  document.getElementById("player-mode").innerHTML = "Single Player Mode Activated";
  singlePlayerMode = true;
  singlePlayerButton.disabled = true;
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

  if (singlePlayerMode) {
    soloPlayerMode();
    checkForWin();
  } //checkGameOver(isWinner);

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
  gameModal.style.display = "none";
  singlePlayerMode = false;
  singlePlayerButton.disabled = false;
  singlePlayerButton.checked = false;
  document.getElementById("player-mode").innerHTML = ""; //Remove all values from array

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

  checkGameOver(isWinner);
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
      return button.disabled = true;
    });
  } else if (moveCounter == 9) {
    document.getElementById("overlay__content").innerHTML = "Game Draw";
    gameModal.style.display = "block";
    gameButtons.forEach(function (button) {
      return button.disabled = true;
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

var soloPlayerMode = function soloPlayerMode() {
  var computerTurn = true;
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

  do {
    computerMove = Math.floor(Math.random() * 9);
    console.log(computerMove);

    if (BoardGridArr[computerMove] === "" && !gameButtons[computerMove].disabled) {
      gameButtons[computerMove].textContent = currentPlayer;
      BoardGridArr[computerMove] = currentPlayer;
      gameButtons[computerMove].disabled = true;
      computerTurn = false;
    }
  } while (computerTurn);

  console.log(computerTurn);
};