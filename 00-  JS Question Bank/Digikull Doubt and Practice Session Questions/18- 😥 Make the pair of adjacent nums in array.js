// Question- [150, 250, 97, 410, 81, 200, 455, 620, 81, 545]
// Answer- [[150, 250], [97, 410], [81, 200], [455, 620], [81, 545]]

let arr = [150, 250, 97, 410, 81, 200, 455, 620, 81, 545, 97];

// sol-01: (won't work on odd length of array)
let result = [];

let arrPair = (arr) => {
  let subArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    subArr.push(arr[i], arr[i + 1]);
    result.push(subArr);
    subArr = [];
    i++;
  }
};

arrPair(arr);
console.log(result);

// sol-02: (works on odd length also)
let arrPair2 = (arr) => {
  let resultArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    resultArr.push([arr.slice(i, i + 2)]);
    i++;
  }

  console.log(resultArr);
};

arrPair2(arr);
