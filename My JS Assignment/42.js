//q41
var magicians = ["Zakota", "Lance Burton", "Harry Anderson", "Ainak wala Jin"];
function show_magicians(array_magic) {
  for (a in array_magic) {
    console.log(array_magic[a]);
  }
}
show_magicians(magicians)
/*42 start make function make_great in this program 
i defined array_magic with statment of Great + so great will be printed*/
function make_great(array_magic) {
    for (a in array_magic) {
       array_magic[a] = "Great " + array_magic[a] //prints magicians with Great at start
    }
}
make_great(magicians)
show_magicians(magicians)


