//if else conditions on fav fruits with print messages
var favorite_fruits = ["banana", "mango", "apple"];
let x = prompt("What is your favorite fruit?");
if (x.toLowerCase() === favorite_fruits[0]) {
  console.log("You really like " + favorite_fruits[0] + "s!");
} else if (x.toLowerCase() === favorite_fruits[1]) {
  console.log("You really like " + favorite_fruits[1] + "s!");
} else if (x.toLowerCase() === favorite_fruits[2]) {
  console.log("You really like " + favorite_fruits[2] + "s!");
} else {
  console.log("Not found!");
}
