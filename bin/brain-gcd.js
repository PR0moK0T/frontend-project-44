import first from "eslint-plugin-import/lib/rules/first.js";
import { gro, getRandomIntInclusive } from "../index.js";
import readlineSync from 'readline-sync';

let y = 0
let yousername = gro()
console.log('Find the greatest common divisor of given numbers.')

export const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

while (y < 3) {
    const firstNum = getRandomIntInclusive(1, 50)
    const secondNum = getRandomIntInclusive(1, 50)
    const trueAnswer = gcd(firstNum, secondNum)

    console.log(`Question: ${firstNum} ${secondNum}`);
    let youAnswer = readlineSync.question(`Your answer: `)
    if (Number(youAnswer) === trueAnswer) {
        console.log('Correct!') 
    } else if (youAnswer !== trueAnswer) {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.Let's try again, ${yousername}!`)
        break
    }
    y++
    if (y === 3) { console.log(`Congratulations, ${yousername}`) }
}