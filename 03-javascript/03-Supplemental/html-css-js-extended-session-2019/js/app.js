// variable - nouns of programming 
// Numbers, String, Boolean

var beverage = "La Croix";
var howMany = 6;
var isThirsty = confirm("Are you thirsty?");
var headLineText = document.getElementById("headline-text");
// alert("I'm currently not drinking a " + beverage);
// alert("But over the week I'll drink " + howMany + " " + beverage);

// if - controls the flow of logic in our program

if(isThirsty === true) {
    headLineText.textContent = "Get this human a " + beverage;
} else {
    alert("I guess you're not thirsty!");
}


document.onkeyup = function(event) {
    console.log(event.key);
    headLineText.textContent += event.key;
}