/*Name Cases: Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase.*/

var myname = "  Ubaid ur rehman siddiqui";
myname = myname.trim(); //remove leading and trailing white spaces from string
var name_low = myname.toLowerCase();
var name_up = myname.toUpperCase();

var nametolsit = myname.split(" "); //split method split a string into array of substrings

var x = "";
for (var i = 0; i < nametolsit.length; i++) {
  x = nametolsit[i];
  nametolsit[i] = x.charAt(0).toUpperCase() + nametolsit[i].slice(1); //slice method is used to extract, returns part of string w/o changing original one
}
var name_title = nametolsit.join(" "); //join method returns array as string w/o changing original one

console.log("Name in Lowercase: " + name_low);
console.log("Name in Uppercase: " + name_up);
console.log("Name in Titlecase: " + name_title);
