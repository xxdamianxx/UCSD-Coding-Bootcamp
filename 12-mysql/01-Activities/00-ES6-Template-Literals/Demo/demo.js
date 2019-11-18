/*
    ES6 Template literals are string literals allowing embedded expressions.
    They allow for easier and more readable string concatenation. Instead of using
    " " or ' ' you use ` ` (back-ticks) to create a string.
*/

// Using regular string concatenation
const sailor = "Ishmael";
const bigWhale = "Moby Dick";
console.log("Ahoy there I'm " + sailor + "!");

// using the ${} will evaluate any expression you put in the string literal
console.log(`Ahoy there I'm ${sailor}!`);

// This now becomes much easier to read
console.log(`Get ready ${sailor} because ${bigWhale} is coming!`);

// Template literals do not strip out any whitespace or linebreaks given to them 
console.log(`The quick brown fox       jumps over the lazy brown dog    

${1 + 1}

!!!`);