const EXERCISE_LINK = "https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript";

const sampleInput = 38;

function digitalRoot(n) {
  if (n < 10) return n;

  const split = String(n).split('').map(e => Number(e));
  const sum = split.reduce((a, b) => a + b);

  return digitalRoot(sum);
}

console.log(digitalRoot(sampleInput));
