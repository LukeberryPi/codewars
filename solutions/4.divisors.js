const EXERCISE_LINK = "https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript";

const sampleInput = 12;

function divisors(n) {
  let divisors = [];
  let currentDivisor = n - 1;
  
  while (currentDivisor > 1) {
    if (n % currentDivisor === 0) {
      divisors.push(currentDivisor);
    }

    currentDivisor--;
  }

  if (divisors.length) return divisors.reverse();

  return `${n} is prime`
}

console.log(divisors(sampleInput));