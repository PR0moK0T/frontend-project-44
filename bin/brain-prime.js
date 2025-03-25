#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gro, getRandomIntInclusive } from '../index.js';

let y = 0;

console.log('Welcome to the Brain Games!');
const yousername = gro();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

while (y < 3) {
  const number = getRandomIntInclusive(1, 50);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${yousername}!`);
    break;
  }
  y += 1;
  if (y === 3) { console.log(`/Congratulations, ${yousername}!/`); }
}
