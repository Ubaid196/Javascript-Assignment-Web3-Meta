/*q6 solved \nlinechanger \tincludewhitespace /\s+/g use to specify \t\n type 
operations from string and replace them with gap*/

var persons_name = "             \t\tUbaid\n\tUr\n\tRehman\n\tSiddiqui\t\n    ";
console.log(persons_name);
var newname = persons_name.replace(/\s+/g, " ").trim(); 
console.log(newname);
