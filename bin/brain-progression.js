#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gro, getRandomIntInclusive } from "../index.js";

let y = 0
console.log('Welcome to the Brain Games!');
let yousername = gro()
console.log('What number is missing in the progression?')

function generateArithmeticProgression(start, difference, length) {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * difference);
    }
    return progression;
}
while (y < 3) {
    const start = Math.floor(Math.random() * 10); 
    const difference = Math.floor(Math.random() * 5) + 1; 
    const length = 10; 
    const progression = generateArithmeticProgression(start, difference, length);

    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..'; 

    console.log(`Question: ${progression.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === hiddenNumber) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.Let's try again, ${yousername}!.`);
        break
    }
    y++
    if (y === 3) { console.log(`/Congratulations, ${yousername}!/`) }
}