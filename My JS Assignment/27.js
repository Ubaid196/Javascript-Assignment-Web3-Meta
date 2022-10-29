//In this program I made array of alien colors and then apply if condition to test the output again changing conditions

var alien_color = ["green", "yellow", "red"];
let x = prompt("What is your color?");

if (x.toLowerCase() === alien_color[0]) {
  console.log("Player earned 5 points!");
} else if (x.toLowerCase() === alien_color[1]) {
  console.log("Player earned 10 points!");
} else if (x.toLowerCase() === alien_color[2]) {
  console.log("Player earned 15 points!");
} else {
  console.log("Better luck nex time:)");
}
