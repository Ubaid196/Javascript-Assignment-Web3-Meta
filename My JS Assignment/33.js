//Ordinal no array made then apply loop to st, nd, rd, th to make ordinal no in separate line printed
const ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < ordinal_numbers.length; i++) {
  if (ordinal_numbers[i] === ordinal_numbers[0]) {
    console.log(ordinal_numbers[0] + "st");
  } else if (ordinal_numbers[i] === ordinal_numbers[1]) {
    console.log(ordinal_numbers[1] + "nd");
  } else if (ordinal_numbers[i] === ordinal_numbers[2]) {
    console.log(ordinal_numbers[2] + "rd");
  } else if (ordinal_numbers[i] > ordinal_numbers.length / 3) {
    console.log(ordinal_numbers[i] + "th");
  }
}
