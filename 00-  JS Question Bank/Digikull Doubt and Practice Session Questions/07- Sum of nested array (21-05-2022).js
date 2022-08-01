// Question- [[2,4], [5,6], [7,1], [3,2]]
// Answer-   [ 6,     11,     8,     5]

let arr = [
  [2, 4],
  [5, 6],
  [7, 1],
  [3, 2],
];

// Sol-01:
let newArr = [];

for (let elem of arr) {
  newArr.push(elem[0] + elem[1]);
}

console.log(newArr);

// Sol-02:
let result = arr.map((elem) => elem[0] + elem[1]);
console.log(result);
