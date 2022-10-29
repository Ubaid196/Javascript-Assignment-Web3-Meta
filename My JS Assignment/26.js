//In this program I made array of alien colors and then apply if condition to test the output condition change here
var alien_color = ["green", "yellow", "red"];
let x = prompt("What is your color?");

if (x.toLowerCase() === alien_color[0]) {
  console.log("Player just earned 5 points for shooting the alien!");
} else {
  console.log("Player just earned 10 points!");
}
