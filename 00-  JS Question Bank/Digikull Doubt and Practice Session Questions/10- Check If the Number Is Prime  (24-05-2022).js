// Check if the number is prime

// Sol-01:
function isPrime(num) {
  let flag = true;
  if (num <= 2) {
    return "NOT PRIME!!!";
  } else {
    for (let i = 2; i < num - 1; i++) {
      if (num % i === 0) {
        flag = false;
      }
    }
  }
  return flag;
}
console.log(isPrime(11));

// Sol-02:
function isPrime2(num) {
  let flag = true;
  if (num <= 2) {
    return "NOT PRIME!!!";
  } else {
    for (let i = 2; i < Math.ceil(num / 2); i++) {
      if (num % i === 0) {
        flag = false;
      }
    }
  }
  return flag;
}
console.log(isPrime2(19));

// Sol-03: (this rule is failing)
/*
LOGIC-1-

a = (num+1)/6
and
b = (num-1)/6

case1: Both a and b gives decimal values, then the number is not prime.
case2: If anyone of the two is a natural number (not decimal number) then it's a prime number.

NOTE: It won't work for num=3 case, 
and also 1 is not considered as a prime number
*/
function isPrime3() {
  for (let i = 1; i <= 100; i++) {
    let a = (i - 1) / 6;
    let b = (i + 1) / 6;

    console.log(i, "=", [a, b]);
  }
}
console.log(isPrime3());
