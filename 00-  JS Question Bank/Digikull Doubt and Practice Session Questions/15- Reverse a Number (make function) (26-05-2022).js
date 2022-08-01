// Write a function to reverse a number
let num = 32243;

// Sol-01:
function reverseNumber(num) {
  let strNum = "" + num;
  let revStrNum = "";

  for (let i = strNum.length - 1; i >= 0; i--) {
    revStrNum += strNum[i];
  }
  return revStrNum * 1;
}
console.log(reverseNumber(num));

// Sol-02:
function reverseNumber2(num) {
  return num.toString().split("").reverse().join("") * 1;
}
console.log(reverseNumber2(num));
