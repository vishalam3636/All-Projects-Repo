// Find the count of multiples of 9 from 100 to 1000

let arr = [];

for (let i = 100; i <= 1000; i++) {
  if (i % 9 === 0) {
    arr.push(i);
  }
}

console.log("Multiples of 9-", arr);
