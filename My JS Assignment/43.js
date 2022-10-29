var magicians = ["Zakota", "Lance Burton", "Harry Anderson", "Ainak wala Jin"];
var magicians_new = []; //empty array to add elements in it of original array with Great at start of name

function show_magicians(arrmag) { //to read array magician through function
  for (a in arrmag) {
    console.log(arrmag[a]);
  }
}
show_magicians(magicians); //give magicians name in list

function make_great(arrmag1, arrmag2) { 
  for (a in arrmag1) {
    arrmag2[a] = "Great " + arrmag1[a];
  }
}
make_great(magicians, magicians_new); //give magicians name start with great in list if console
console.log(magicians_new); //prints array of magicians with Great at start
console.log(magicians); // prints original array of magicians
