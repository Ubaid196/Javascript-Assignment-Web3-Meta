//created function of different sandwich flavors
function sandwich_flavors(...flavors) {  //...flav spread syntax allows number of arguments to enter in it
  console.log("Your sandwich ingredients are " + [...flavors]); // print message with flavors asked
}
sandwich_flavors(["tomato", "beef", "cheese"]);
sandwich_flavors(["tomato", "chicken", "cheese"]);
sandwich_flavors(["onion", "beef", "garlic"]);
