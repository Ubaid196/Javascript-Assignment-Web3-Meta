/*Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love JavaScript. Make a large shirt 
with the default text, and a shirt of any size with a different message.*/

function make_shirt(size = "Large", text = "I love Javascript.") {  //if parameters defined in function that makes it default
  console.log("For T-shirt size " + size + ", print the message as: " + text);
}
make_shirt(); //default read as large, I love Javascript as given in function
make_shirt("Medium"); //default read text
make_shirt("Small", "I love Typescript.");
