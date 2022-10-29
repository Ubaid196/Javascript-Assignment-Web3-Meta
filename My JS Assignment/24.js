// I did more conditional tests using below operators
//Tests for equality and inequality with strings
var myname = "Ubaid";
console.log(myname == "Ubaid");
console.log(myname !== "Ubaid");

//Tests using the lower case function
var name_low = myname.toLowerCase();
console.log(name_low == "ubaid");
console.log(name_low == "Ubaid");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
let x = 5;
let y = 6;
console.log(x > y || (y < x && x >= 5) || (y <= 5 && x !== 5) || y === 6);
console.log((x > y || (y < x && x >= 5) || y <= 5) && (x !== 5 || y === 6));

//Test whether an item is in a array
//Test whether an item is not in a array
var myarray = [1, 2, 3, 4, 5, 8, 75, 5];
console.log(myarray.includes(5)); //includes check whether particular element is included in array or not
console.log(myarray.includes(33));
