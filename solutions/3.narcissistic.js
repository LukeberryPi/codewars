const EXERCISE_LINK = "https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript";

const sampleInput = 371;

function narcissistic(n) {
  const length = n.toString().length;
  const digits = n.toString().split('').map(e => parseInt(e));

  let sumOfPoweredDigits = 0;

  for (let digit of digits) {
    sumOfPoweredDigits += digit ** length
  }

  return sumOfPoweredDigits === n;
}

console.log(narcissistic(sampleInput));