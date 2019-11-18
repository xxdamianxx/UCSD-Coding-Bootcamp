// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // // Case 2 - Large set of Numbers
// // var arraySize = 400000;

// Compares index to random number
var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}
// var array = [5, 3, 8, 7]

// ================================================
// SOLUTION - Selection Sort
// ================================================

// Swaps and compares items in index
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// Damien's Selection Sort
function selectionSort(items) {
  var j = 0;
  var len = items.length;
  var min;

  do {
    min = j;
    for (var i = j + 1; i <= len; i++) {
      if(items[i] < items[min]){
        min = i;
      }
    }

    if (j !== min){
      swap(items, j, min)
    }
  } while (j++ < len);

  return items;

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready to start swapping elements in the array.

  // 1. Scan through the list and find the smallest number possible.
  // This requires looping through and checking which number
  // is greater than 0, but smaller than all other numbers.
  // 2. We would then say that this is our first number.
  // let minAt = 0; // 3, 5, 7, 8
  // for (let i = minAt; i < items.length; i += 1) {
  //   minAt = i
  //   for (let j = i + 1; j < items.length; j += 1) {
  //     if (items[j] < items[minAt]) {
  //       minAt = j
  //     }
  //   }

  //   // is the current position is not the current min
  //   if (i !== minAt) {
  //     swap(items, i, minAt)
  //   }
  // }

  // return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
