//In this program I asked username using prompt and then print message to members special message to admin so use if else
var usernames = ["admin", "ubaid", "zaryab", "abbas", "talha", "junaid"];
let user = prompt("Login ID!");
user = user.toLowerCase();
if (user === usernames[0]) {
  console.log("Hello " + user + ", would you like to check the status?");
} else if (user > usernames[0]) {
  console.log("Hello " + user + " Good Morning!");
}
