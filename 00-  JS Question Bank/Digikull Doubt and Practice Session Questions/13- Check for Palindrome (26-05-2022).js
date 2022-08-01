// Write a function to check if the word is Palindrome

// Sol-01:
function checkPalindrome(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return str === revStr;
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("madama"));

// Sol-02:
let str = "kanak";
// let str = "katori";
// let str = ""; // empty string also giving palindrome, so make some changes in solution

function checkPalindrome2(str) {
  let flag = "Its palindrome";

  if (!str) return "Empty String..pass a word!!"; // in case of empty string.

  for (let i = 0; i <= str.length / 2; i++) {
    // console.log(str[i], str[str.length-1-i])

    if (str[i] !== str[str.length - 1 - i]) {
      flag = "Its not a palindrome";
      break;
    }
  }
  return flag;
}

console.log(checkPalindrome2("kanak"));
console.log(checkPalindrome2("katori"));
console.log(checkPalindrome2());
