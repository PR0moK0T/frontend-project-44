import first from "eslint-plugin-import/lib/rules/first.js";
import { gro, getRandomIntInclusive } from "../index.js";
import readlineSync from 'readline-sync';

let y = 0
let yousername = gro()
console.log('Find the greatest common divisor of given numbers.')


while (y < 3) {
    const firstNum = getRandomIntInclusive(1, 50)
    const secondNum = getRandomIntInclusive(1, 50)
    const trueAnswer = 

    console.log(`Question: ${firstNum} ${secondNum}`);
    let youAnswer = readlineSync.question`Your answer: `
    y++
}