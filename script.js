"use strict";

// console.log(document.querySelector(".message").textContent); //Start guessing...

// // textContent ile Start guessing yazisini deyisirik
// document.querySelector(".message").textContent = "Correct Number 🎉";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////

// Buttons
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

// DOM Elements
let scoreElement = document.querySelector(".score");
let messageElement = document.querySelector(".message");
let numberElement = document.querySelector(".number");

// Random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);


// Check Button Functionality
const checkNumber = function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    messageElement.textContent = "⛔ No number!";
  } 
  // When player wins
  else if (guess === secretNumber) {
    messageElement.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";
    numberElement.textContent = secretNumber;
  } 
  // When guess is wrong
  else {
    if (score > 1) {
      messageElement.textContent = guess > secretNumber ? "📉 Too high!" : "📉 Too low!";
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = "💥 You lost the game!";
      scoreElement.textContent = 0;
    }
  }
};

// Reset Game Functionality
const againClick = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageElement.textContent = "Start guessing...";
  scoreElement.textContent = score;
  numberElement.textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
};

// Event Listeners
againBtn.addEventListener('click', againClick);
checkBtn.addEventListener("click", checkNumber);
