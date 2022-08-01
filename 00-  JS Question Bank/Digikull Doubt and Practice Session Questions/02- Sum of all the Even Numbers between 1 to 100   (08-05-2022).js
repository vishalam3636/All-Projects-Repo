// Find the sum of all the even Numbers Between 1 to 100

// Sol-01
let evenSums = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSums += i;
  }
}
console.log(evenSums);
