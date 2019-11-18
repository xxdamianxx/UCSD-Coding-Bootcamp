var numToFind = 7;
var left;
var right;

var myArr = [0, 4, 7, 10, 200, 300, 6000, 7000];




// Do your best to code a binary search for this array looking for 7
function binarySearch(numbersArr, searchElement) {
    return false;
}

let found = binarySearch(myArr, numToFind);
console.log(found);

// Conducts Binary Search
function binarySearch(myArr, numToFind, left, right) {
    var middle = (left + right)/2;
    
    if (left > right) {
        return -1;
    }
    else if (myArr[middle] > numToFind) {
        return binarySearch(myArr, numToFind, left, middle -1);
    }
    else {
        return binarySearch(myArr, numToFind, middle + 1, right);
    }
}