#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gro, getRandomIntInclusive } from '../index.js';

const signs = ['*', '-', '+'];

let y = 0;

console.log('Welcome to the Brain Games!');
const yousername = gro();
console.log('What is the result of the expression?');

const getTrueAnswer = (num1, num2, sign) => {
  const operation = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };

  return operation[sign];
};

const calculate = () => {
  while (y < 3) {
    const firstNum = getRandomIntInclusive(1, 50);
    const secondNum = getRandomIntInclusive(1, 50);
    const indexSing = getRandomIntInclusive(0, 2);

    const trueAnswer = getTrueAnswer(firstNum, secondNum, signs[indexSing]);

    console.log(`Question: ${firstNum} ${signs[indexSing]} ${secondNum}`);

    const youAnswer = readlineSync.question`Your answer: `;
    if (Number(youAnswer) === trueAnswer) {
      console.log('Correct!');
    } else if (Number(youAnswer) !== trueAnswer) {
      console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.Let's try again, ${yousername}!`);
      break;
    }
    y += 1;
    if (y === 3) { console.log(`/Congratulations, ${yousername}!/`); }
  }
};

calculate();
