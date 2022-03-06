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
    let result = `"You win ${playerSelection} beats ${computerSelection}`;
    return result;
  } else {
    let result = `"You Lose! ${playerSelection} beats ${computerSelection}`;
    return result;
  }
}
console.log(playRound("rock", computerPlay()));
