function computerPlay() {
  let itemList = ["Rock", "Paper", "Scissor"];
  let index = Math.floor(Math.random() * itemList.length);
  return itemList[index];
}

console.log(computerPlay());
