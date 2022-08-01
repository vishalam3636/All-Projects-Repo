let arr = [1, 6, 8, 4];

let result = arr.map((num) => num ** 2).reduce((curr, tot) => curr + tot);
console.log(result);
