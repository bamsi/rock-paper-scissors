/**
 *
 * @returns the random item from the list
 */
function computerPlay() {
  let itemList = ["Rock", "Paper", "Scissor"];
  let index = Math.floor(Math.random() * itemList.length);
  return itemList[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    let result = `${playerSelection} is incorrect guess, Try again! `;
    alert(result);
    return false;
  } else {
    let result = `${playerSelection} is correct guess, Play again! `;
    alert(result);
    return true;
  }
}

function game() {
  let win = 0;
  for (let i = 0; i < 5; i++) {
    let value = window.prompt("Enter rock, paper or scissor");
    let result = playRound(value, computerPlay());
    if (result) {
      win++;
    }
  }
  //decide a winner when he/ she scores more than 2 attempt
  if (win > 2) {
    alert("Congratulations! You won");
  } else {
    alert("Sorry! You lose");
  }
}

//call game function
game();
