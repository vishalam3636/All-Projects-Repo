// Count the Vowels In The String

let mainStr = "vishal singh chauhan";
let toLowerStr = mainStr.toLocaleLowerCase();

// Sol-01
let count = 0;

for (let elem of toLowerStr) {
  if (
    elem === "a" ||
    elem === "e" ||
    elem === "i" ||
    elem === "o" ||
    elem === "u"
  ) {
    count++;
  }
}
console.log(count);

// Sol-02
let vowelCollection = [];

for (let elem of toLowerStr) {
  if (
    elem === "a" ||
    elem === "e" ||
    elem === "i" ||
    elem === "o" ||
    elem === "u"
  ) {
    vowelCollection.push(elem);
  }
}
console.log(vowelCollection.length);

// Sol-03
let vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (let i = 0; i <= toLowerStr.length - 1; i++) {
  if (vowels.includes(toLowerStr[i])) {
    vowelCount++;
  }
}
console.log(vowelCount);
