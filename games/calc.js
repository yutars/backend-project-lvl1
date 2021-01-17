import * as q from '../src/index.js';

export default async () => {
  const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const ops = ['*', '+', '-'];
  const name = q.prompt();
  console.log('What is the result of the expression?');
  let count = 0;
  while (count < q.maxCountRounds()) {
    const ofirst = RandomNum(-100, 100);
    const osecond = RandomNum(-100, 100);
    const i = RandomNum(0, 2);
    const calc = (first, second, op) => {
      let result = first;
      if (op === '+') {
        result = first + second;
      }
      else if (op === '-') {
        result = first - second;
      }
      else if (op === '*') {
        result = first * second;
      }
      return result;
    };
    const answer = +q.Question(`${ofirst} ${ops[i]} ${osecond}`);
    const ranswer = calc(ofirst, osecond, ops[i]);
    if (answer !== ranswer) {
      q.isWrong(answer, ranswer, name);
      break;
    }
    else {
      count += 1;
      q.isCorrect();
    }
    q.Congratulation(name);
  }
};
