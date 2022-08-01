// Use array methods to find the sum of all the odd nums in the given array-
// let arr = [4,5,2,6,12,34,59,39]

let arr = [4, 5, 2, 6, 12, 34, 59, 39];

// sol-01:
let sumOdd1 = 0;

for (let num of arr) {
  if (num % 2 === 1) {
    sumOdd1 += num;
  }
}

console.log(sumOdd1);

// sol-02:
let result = arr
  .filter((num) => num % 2 === 1)
  .reduce((curr, sum) => curr + sum);
console.log(result);
