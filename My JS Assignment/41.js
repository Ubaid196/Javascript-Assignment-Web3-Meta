//created array of magicians then made function show_magician to read array through function then print statement
var magicians = ["Zakota", "Lance Burton", "Harry Anderson", "Ainak wala Jin"];

function show_magicians(array_magic) {  //used another var name here array_magic it is equivalent to var magicians within function premises
  for (a in array_magic) {  //a is var in means included in array_magic then print console
    console.log(array_magic[a]);
  }
}
show_magicians(magicians);
