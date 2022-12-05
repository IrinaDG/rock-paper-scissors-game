let playerPoints = 0
let computerPoints = 0

game()

function welcome() {
  return alert("Welcome to Rock Paper Scissors! The game will last 5 rounds! Please open the console to play the game!");
}

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const result = options[Math.floor(Math.random() * options.length)];
    return result;
}

function getPlayerSelection() {
    let playerChoice = window.prompt("Please enter your choice: (rock, paper or scissors)!")
    if (playerChoice === null) {
    return alert ("You didn't enter your choice!");
    }else if (playerChoice === " " || playerChoice === "") {
    return alert(
      "Your input is empty! Please enter a valid option! (Rock, Paper, Scissors)"
      );
    } else if (/\d/.test(playerChoice)) {
        return alert(
          "Your input is or contains a number! Please enter a valid option! (Rock, Paper, Scissors)"
        );
    } else if (containsSpecialChars(playerChoice)) {
      return alert(
        "Your input is not valid! It contains special characters! Please enter a valid option! (Rock, Paper, Scissors)"
      );
    } else if (typeof playerChoice === "string" &&
       !playerChoice.includes("rock") &&
       !playerChoice.includes("paper") &&
       !playerChoice.includes("scissors") &&
       playerChoice === playerChoice.trim() &&
       !containsSpecialChars(playerChoice)) {
        return alert(
          "Your input doesn't contain one of the valid game options! Please enter a valid option! (Rock, Paper, Scissors)"
        );
    } else {
        return playerChoice.toLowerCase().trim();
    }
}

function containsSpecialChars(input) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(input);
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = getPlayerSelection();
  
    if (playerSelection === null) {
      return alert("Okay, we can play later!")
    } else if (playerSelection === computerSelection) {
        playerPoints++
        computerPoints++
        console.log("Draw! \n You and the computer have the same choice! \n Score: You:1 Computer:1");
        return alert(
          `Draw! \n Both you and the computer have chosen ${playerSelection}! \n Score: You:1 Computer:1`
        );
    } else if (
      playerSelection === "paper" &&
      computerSelection === "rock") {
      playerPoints++;
      console.log(
        "You won! The computer has chosen rock! Paper beats Rock! \n Score: You:1 Computer:0"
      );
      return alert(
          "You won! The computer has chosen rock! Paper beats Rock! \n Score: You:1 Computer:0"
        );
    } else if (
      playerSelection === "rock" &&
      computerSelection === "scissors") {
      playerPoints++;
      console.log(
        "You won! The computer has chosen scissors! Rock beats scissors! \n Score: You:1 Computer:0 "
      );
      return alert(
        "You won! The computer has chosen scissors! Rock beats scissors! \n Score: You:1 Computer:0 "
      );
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerPoints++;
      console.log(
        "You won! The computer has chosen paper! Scissors beats paper! \n Score: You:1 Computer:0"
      );
      return alert(
        "You won! The computer has chosen paper! Scissors beats paper! \n Score: You:1 Computer:0"
        ); 
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors") {
      computerPoints++;
      console.log(
        "You lose! The computer has chosen scissors! Scissors beats paper! \n Score: You:0 Computer:1"
      );
      return alert(
        "You lose! The computer has chosen scissors! Scissors beats paper! \n Score: You:0 Computer:1"
      );
    } else if (
      playerSelection === "rock" &&
      computerSelection === "paper") {
        computerPoints++
        console.log(
          "You lose! The computer has chosen paper! Paper beats rock! \n Score: You:0 Computer:1"
        );
        return alert(
          "You lose! The computer has chosen paper! Paper beats rock! \n Score: You:0 Computer:1"
        );
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "rock") {
        computerPoints++
        console.log(
          "You lose! The computer has chosen rock! Rock beats scissors! \n Score: You:0 Computer:1"
        );
        return alert(
          "You lose! The computer has chosen rock! Rock beats scissors! \n Score: You:0 Computer:1"
        );
    }
}

function game() {
  welcome()
    for (i = 1; i <= 5; i++){
      playRound() 
    }
  results()
  newGame()
  return;
}

function results() {
    let playerResult = `You have ${playerPoints} points!`;
    let computerResult = `The computer has ${computerPoints} points!`;
    if (playerPoints > computerPoints) {
      console.log(
        "Congratulations! You are the winner! \n" +
        playerResult +
        computerResult
      );
      return alert(
        `Congratulation! You are the winner! ${playerResult} ${computerResult}`
      ); 
    } else if (playerPoints === computerPoints &&
      playerPoints !== 0 &&
      computerPoints !== 0) { 
      console.log(
        "It was a tie. Try again to beat the computer! \n" +
          playerResult +
          computerResult
      );
      return alert(
        `It was a tie. Try again to beat the computer! \n ${playerResult} ${computerResult}`
      );
    } else if (playerPoints === 0 && computerPoints === 0) {
      console.log("The 5 rounds are finished with a score of 0. Please play again and enter a valid option!")
      return alert(
        "The 5 rounds are finished with a score of 0. Please play again and enter valid options!"
      );
    }else {
      console.log(
        "You lost! Play again to beat the computer! \n" +
          playerResult +
          computerResult
      );
      return alert(
        `You lost! Play again to beat the computer! \n ${playerResult} ${computerResult}`
      );
    }
}

function newGame() {
  let newRound = window.prompt(
    "Would you like to play again? Please type (Y/N) !"
  );
  if (newRound === null) {
    alert("Your input is empty! Please type in Y/N !");
    newGame()
  } else {
    newRound = newRound.toLowerCase();
    switch (newRound) {
      case "n":
        alert("Okay! Have a nice day!");
        break;
      case "y":
        game();
        break;
      default:
        alert("Please enter a valid option (Y/N)!");
        newGame();
    }
  }
}


