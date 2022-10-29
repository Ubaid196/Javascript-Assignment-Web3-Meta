/*In this program in cotinuation to 15q I just add strings to array at 
start, middle, end using unsift,splice,push then print invitation to each one using for loop*/ 

var guest_list = ["Abbas", "Zaryab", "Minhaj"];

//below program is of q14
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}

//below program is of q15
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
//program 16 starts
console.log(
  "\nGood news everyone! We have a room for more guests. More guests more fun:)\n"
);
guest_list.unshift("Osama"); //unshift shift the string at beggining of array
guest_list.splice(guest_list.length / 2, 0, "Junaid"); //splice use to insert one or more element .lenth/2 means Junaid will be added after 2nd one
guest_list.push("Hanan"); //push use to add string at end of array

for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
