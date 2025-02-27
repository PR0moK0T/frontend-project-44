import readlineSync from 'readline-sync';

const gro = () => {
const name = readlineSync.question('May I have your name? John');
console.log('Hello, John!')
}
export default gro