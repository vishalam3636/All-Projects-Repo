// Reverse a string

let str = "Vishal";

// Sol-01:
function reverseStr(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  console.log(reversedStr);
}

reverseStr(str);

// Sol-02:
let result = str.split("").reverse().join("");
console.log(result);
