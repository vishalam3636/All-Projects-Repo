/*
Write conditional-
If num is between or equal 0 to 100, 👉🏽 I am below 100
If num is greater than 100 ,         👉🏽 I am above 100
If num is below 0 ,                  👉🏽 I am below 0
*/

// Sol-01
let num = 25;

if (num < 0) {
  console.log("I am below 0");
} else if (num > 0 && num <= 100) {
  console.log("I am in between 1 and 100");
} else {
  console.log("I am above 100");
}
