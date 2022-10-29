/*In this program i made array of fav places then perform 
sort, reverse array to check whether original array order remain same or not*/

var fav_places = ["London", "Canada", "Australia", "Cuba", "Maldives"];
console.log("Original: " + fav_places);
//[...varname] spread syntax use to perform iterations without affecting the original array
console.log(
  "\nAlphabetical order/original order unchanged: " + [...fav_places].sort()
);
console.log(
  "\nReverse alphabetical order/original order unchanged: " +
    [...fav_places].reverse()
);
console.log("\nReversing the order: " + fav_places.reverse());
console.log(
  "\nReversing the order again to retain original: " + fav_places.reverse()
);
fav_places = fav_places.sort();
console.log("\nSorted/original order changed: " + fav_places);
fav_places = fav_places.reverse();
console.log("\nReversed/original order changed: " + fav_places);
