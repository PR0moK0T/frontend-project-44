#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gro, getRandomIntInclusive } from '../index.js';

let y = 0;
console.log('Welcome to the Brain Games!');
const yousername = gro();
console.log('Find the greatest common divisor of given numbers.');

function gcd(num1, num2) {
  let modenum1 = num1;
  let modenum2 = num2;
  while (modenum2 !== 0) {
    const temp = modenum2;
    modenum2 = modenum1 % modenum2;
    modenum1 = temp;
  }
  return modenum1;
}

while (y < 3) {
  const firstNum = getRandomIntInclusive(1, 50);
  const secondNum = getRandomIntInclusive(1, 50);
  const trueAnswer = gcd(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);
  const youAnswer = readlineSync.question`Your answer: `;
  if (Number(youAnswer) === trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
        Let's try again, ${yousername}!`);
    break;
  }
  y += 1;
  if (y === 3) { console.log(`/Congratulations, ${yousername}!/`); }
}
