"use strict";

//Board Grid buttons
var gameButtons = document.querySelectorAll(".board_button");
; //Restart buttons

var restartButton = document.querySelector("#restart"); //Board grid array - grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var BoardGridArr = ["", "", "", "", "", "", "", "", ""]; //console.log(gameButtons)

/***** Eventlistener ("click") for all buttons *****/

gameButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var selectedButton = e.target; //Get the that was clicked

    var gridLocation = selectedButton.id;
    BoardGridArr[gridLocation] = "Hello";
    selectedButton.textContent = "Hi Bitch"; // console.table(BoardGridArr);
  });
});