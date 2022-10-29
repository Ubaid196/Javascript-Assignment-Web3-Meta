//In this program I changed guest list by simultaneously removing and replacing array element and print message to it
var guest_list = ["Abbas", "Zaryab", "Minhaj"];
//this program below done in q14
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
console.log(
  "Guys unfortunately " +
  guest_list[2] +
    " can't make it to attend the dinner tonight due to some emergency."
);
guest_list.splice(2, 1, "Talha"); // splice method remove minhaj from list and add Talha to replace removed one
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
