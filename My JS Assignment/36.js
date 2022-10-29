/* A function is a block of JavaScript that robotically does the same thing again and again,
whenever you invoke its name. It saves you repetitive coding and makes your code easier to
understand */
//created functionname make_shirt with parameters/arguments size text and print statements 
function make_shirt(size, text) {
  console.log(
    "Printing facility is available for " +
      size +
      " T-shirts" +
      ". You can provide your custome message to be printed like: " +
      text
  );
}
make_shirt(
  ["small", "medium", "large", "extra large"],
  "I love my country Pakistan."
);


