var cars = {}; // {} means cars is object will be defined in function

function car(mfg, model, ...favcar) {  //created function car with 2 fixed arguments and 3rd one ...favcar is for arbitrary no of arguments
  cars = {  //now defined cars object
    Manufacturer: mfg,
    Model: model,
  };
  for (var i = 0; i < favcar.length; i++) { //to add additional features 
    cars[i] = favcar[i]; 
  }
  return cars; //if not return it the function will be undefined
}

console.log(car("Honda", "City", "White", "20", "Karachi no")); //print the said details
