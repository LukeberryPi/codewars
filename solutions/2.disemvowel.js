const EXERCISE_LINK = "https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript";

const sampleInput = "This website is for losers LOL!";

function disemvowel(n) {
  const split = String(n).split('').map(e => Number(e));
  let sum = split.reduce((a, b) => a + b);

  if (sum > 9) return disemvowel(sum);

  return sum;
}

console.log(disemvowel(sampleInput));
