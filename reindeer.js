// console.log("hello reindeer");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

for (var i = 0; i < reindeer.length; i++) {
  // console.log(reindeer[i]);
// }

// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

var newReindeer = reindeer[i];
var newColors = colors[i];

// console.log("newReindeer", newReindeer);

var reindeerColor = newColors + " " + newReindeer + ",";

console.log(reindeerColor);

var hohohoElement = document.getElementById("reindeer");

hohohoElement.innerHTML += reindeerColor + " ";
};


// for (var i = 0; i < reindeer.length; i++) {
// console.log(reindeer[i]);
// }

// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// var newReindeer = reindeer[i];
// var newColors = colors[i];
// var newReindeer = newReindeer + newColors;
// console.log("newReindeer", newReindeer);


// var hohohoElement = document.getElementById("reindeer");

// hohohoElement.innerHTML = "You clicked on " + "newReindeer";






// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer



