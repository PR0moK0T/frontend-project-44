#!/usr/bin/env node
import { gro } from "../index.js";
import readlineSync from 'readline-sync';

let i = 0
let y = 0

console.log('Welcome to the Brain Games!');
let yousername = gro()
console.log('Answer "yes" if the number is even, otherwise answer "no".')

while (y < 3) {
    i = Math.floor(Math.random() * 50) + 1;
    console.log(`Question: ${i}`);
    let bro = readlineSync.question`Your answer: `
    if (i % 2 === 0 && bro === 'yes') {
        console.log('Correct!')
    }
    else if (i % 2 !== 0 && bro === 'no') {
        console.log('Correct!')
    }
    else  if (bro === 'no' && i % 2 === 0) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${yousername}!`)
        break
    } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${yousername}!`)
        break
    }
    y += 1
    if (y === 3) { console.log(`/Congratulations, ${yousername}/`) }
}