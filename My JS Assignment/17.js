/*In this program I shrink guest list using pop and print sorry message using loop, 
2 guests remain printed invite message to them using loop and then popped all elemnts to check list is empty*/

var guest_list = ["Abbas", "Zaryab", "Minhaj"];
//from program 14
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
//form program 15
console.log(
  "Hey everyone! " +
    guest_list[2] +
    ", can't make it to attend the dinner tonight due to some emergency."
);
guest_list.splice(2, 1, "Talha");
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
//from program16
console.log(
  "\nGood news everyone! We have a room for more guests. More guests more fun:)\n"
);
guest_list.unshift("Osama"); //unshift shift the string at beggining of array
guest_list.splice(guest_list.length / 2, 0, "Junaid"); //splice use to insert one or more element .lenth/2 means Junaid will be added after 2nd one
guest_list.push("Hanan");
// console.log(guest_list);


for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
//program 17 starts
console.log(
  "\nHey Everyone! Sad news, I can invite only two people for dinner tonight due to shortage of space.\n"
);

var x = "";
for (var i = guest_list.length; i > 2; --i) {
  x = guest_list.pop();
  console.log("Sorry " + x + ", I can't invite you at dinner tonight.");
}

for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " + guest_list[i] + ", you are still invited at dinner tonight."
  );
}

var y = "";
for (var i = guest_list.length; i > 0; --i ) {
  y = guest_list.pop();
  console.log("Empty " + guest_list);
}
