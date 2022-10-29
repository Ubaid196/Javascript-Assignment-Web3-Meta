//\nlinechanger \tincludewhitespace
var persons_name = "         Ubaid\t  Ur\t  Rehman \nSiddiqui    "; 
//print the persons name
console.log(persons_name);
///\s+/g specify \t\n and white spaces in string(if I write on s it will specify \t\n but s+ specift \t,\n,white space) .replace replace them with " " and trim removes white spaces from start and end 
var newname = persons_name.replace(/\s+/g, " ").trim(); 
//print the newname
console.log(newname); 

//this program is for how to set date 
// var currentdate = new Date();
// console.log(
//   "My name is Ubaid and I created this program at " +
//     (currentdate.getDate() - 1) +
//     "/" +
//     (currentdate.getMonth() + 1) +
//     "/" +
//     currentdate.getFullYear() +
//     "."
// );
