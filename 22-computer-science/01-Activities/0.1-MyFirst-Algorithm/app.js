// Write a `for` loop that looks at each index of the array 
// to see if it matches the randomValue

// If it does match the random value display an alert box
// with the index of the array and the value

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var randomValue = stuff[ Math.floor( Math.random() * 14 ) ];

for (var i = 0; i < stuff.length; i++) {
    if (stuff[i] == randomValue) {
        alert(randomValue + "in index " + index[i]);
    }
}