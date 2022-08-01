// Question Find The Second Largest Number In The Array
// let arr = [1,4,7,3,9,14,8,10,17,20];

// Sol-01
let arr = [1, 4, 7, 3, 9, 14, 8, 10, 17, 20];

let sortedArr = arr.sort((a, b) => a - b);
let secondLargest = sortedArr[sortedArr.length - 2];
console.log(secondLargest);

// Sol-02: (Not gonna work if the largest come before second largest in the array, So i guess the only way to sort the array and get the second last number)
let arr2 = [1, 4, 20, 7, 3, 9, 14, 8, 10, 17];

function findSecondLargest2(arr2) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] > largest) {
      secondLargest = largest;
      largest = arr2[i];
    }
  }
  console.log(secondLargest);
}
findSecondLargest2(arr2); // 4

// Sol-03 (sorting the array by bubble sort method)
// 👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻
// Sol-02: (Not gonna work if the largest come before second largest in the array, So i guess the only way to sort the array and get the second last number)

let arr3 = [1, 4, 20, 100, 7, 3, 9, 14, 8, 10, 17];

for (let i = 0; i < arr3.length; i++) {
  for (let j = i + 1; j < arr3.length; j++) {
    if (arr3[i] > arr3[j]) {
      [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
    }
  }
}

console.log(arr3); // sorted arr
console.log(arr3[arr3.length - 2]); // gives the second largest number in array
