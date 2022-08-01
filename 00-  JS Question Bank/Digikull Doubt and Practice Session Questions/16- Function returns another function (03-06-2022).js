/*
Write a function, which is returning another function, 
the returned function will have two numbers as arguments, and it should be returning the sum of those two numbers
*/

// Sol:
function first() {
  function second(num1, num2) {
    return num1 + num2;
  }
  return second(5, 7);
}

console.log(first());
