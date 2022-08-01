// Write a program to check if a number is even or odd

// Sol-01:
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "The Number is Even";
  } else {
    return "The Number is Odd";
  }
}

console.log(evenOrOdd(12));
console.log(evenOrOdd(13));

// Sol-02:
function evenOrOdd2(num) {
  return num % 2 === 0;
  // return Boolean(num%2);
}
console.log(evenOrOdd2(17));
console.log(evenOrOdd2(20));
