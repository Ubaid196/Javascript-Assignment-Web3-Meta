//In this program I make array of guest list then apply for loop to print separate list with a invitation message to all

var guest_list = ["Abbas", "Zaryab", "Minhaj"];
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
