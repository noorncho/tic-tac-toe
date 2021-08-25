"use strict";

//Board Grid buttons
var gameButtons = document.querySelectorAll(".board_button");
; //Restart buttons

var restartButton = document.querySelector("#restart"); //Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var BoardGridArr = ["", "", "", "", "", "", "", "", ""]; //Counter variables

var turnCounter = 0; //Track player turns

var moveCounter = 0; //Tracks number of moved taken
//console.log(gameButtons)

/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var selectedButton = e.target; //Get the that was clicked

    var gridLocation = selectedButton.id;
    BoardGridArr[gridLocation] = "Hello";
    selectedButton.textContent = "Hi Bitch";
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