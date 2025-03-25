#!/usr/bin/env node
import first from "eslint-plugin-import/lib/rules/first.js";
import { gro, getRandomIntInclusive } from "../index.js";
import readlineSync from 'readline-sync';

let y = 0
console.log('Welcome to the Brain Games!');
let yousername = gro()
console.log('Find the greatest common divisor of given numbers.')

function gcd(num1, num2) {
    while (num2 !== 0) {
        let temp = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1
}

while (y < 3) {
    const firstNum = getRandomIntInclusive(1, 50)
    const secondNum = getRandomIntInclusive(1, 50)
    const trueAnswer = gcd(firstNum, secondNum)

    console.log(`Question: ${firstNum} ${secondNum}`);
    let youAnswer = readlineSync.question`Your answer: `
    if (youAnswer == trueAnswer) {
        console.log('Correct!') 
    } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
        Let's try again, ${yousername}!`)
        break
    }
    y++
    if (y === 3) { console.log(`/Congratulations, ${yousername}!/`) }
}