const EXERCISE_LINK = "https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript";

const sampleInput = "This website is for losers LOL!";

function disemvowel(n) {
  const vowels = 'aeiou';
  const split = n.split('');

  const disemvowelled = split.filter(char => !vowels.includes(char)).join('');

  return disemvowelled;
}

console.log(disemvowel(sampleInput));
