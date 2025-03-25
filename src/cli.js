import readlineSync from 'readline-sync';

export const gro = () => {
  const name = readlineSync.question`May I have your name? `;
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
