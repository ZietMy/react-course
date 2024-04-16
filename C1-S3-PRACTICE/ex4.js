let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  let evenNumbersArr= arr.filter((s)=>s%2==0)
  return evenNumbersArr;
  // TODO - Your code here (1 line)
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  let squaredArr= arr.map((s)=>s*s);
  return squaredArr;
  //  TODO - Your code here (1 line)
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  let sum = arr.reduce((total, currentValue)=> total+currentValue) ;
  return (sum);
  //  TODO - Your code here (1 line)
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15