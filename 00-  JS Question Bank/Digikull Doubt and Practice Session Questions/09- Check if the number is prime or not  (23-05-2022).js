// Check if the number is prime or not

function checkPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag ? "Prime" : "Not Prime";
}

console.log(checkPrime(29));
