import * as q from '../src/index.js';

export default async () => {
  const ops = ['*', '+', '-'];
  const name = q.prompt();
  console.log('What is the result of the expression?');
  let count = 0;
  while (count < q.maxCountRounds()) {
    const ofirst = q.randomNum(-100, 100);
    const osecond = q.randomNum(-100, 100);
    const i = q.randomNum(0, 2);
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
      return false;
    }
    count += 1;
    q.isCorrect();
  }
  q.Congratulation(name);
  return true;
};
