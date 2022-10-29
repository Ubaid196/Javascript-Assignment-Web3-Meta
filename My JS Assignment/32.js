/*In this program I made two arrays of users and then apply for loop in new users list to test 
if current users include new users then already exists else available*/
const current_users = ["abbas", "ubaid", "zaryab", "minhaj", "talha"];
const new_users = ["Riaz", "Osama", "UbAid", "Zaryab", "Hanan"];

const current_lowercase = current_users.map((current_users) =>  //map() used to lowercase each element in array. It is used to perform operation on each array element w/o changing original array it create a new array
  current_users.toLowerCase() 
);
const new_lowercase = new_users.map((new_users) => new_users.toLowerCase());

for (var i = 0; i < new_lowercase.length; i++) {
  if (current_lowercase.includes(new_lowercase[i])) {
    console.log("Sorry! " + new_lowercase[i] + " is not available.");
  } else {
    console.log("Great! " + new_lowercase[i] + " is available.");
  }
}
