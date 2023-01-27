const EXERCISE_LINK = "https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript";

const sampleInput = 13;

// recebemos um número positivo
// temos que retornar uma lista com todos seus divisores
// excluindo o próprio número e o 1
// caso essa lista seja vazia, retornaremos que o número é primo

function divisors(n) {
  let divisors = [];
  
  for (let d = 2; d < n; d++) {
    if (n % d === 0) divisors.push(d);
  }

  if (divisors.length) return divisors;

  return `${n} is prime`
}

console.log(divisors(sampleInput));