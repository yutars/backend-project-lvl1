import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

export default () => {
  const ops = ['*', '+', '-'];
  const name = q.invite();
  q.getPointGame('What is the result of the expression?');
  let count = 0;
  while (count < q.getMaxCountRounds) {
    const ofirst = utils.getRandomNum(-100, 100);
    const osecond = utils.getRandomNum(-100, 100);
    const i = utils.getRandomNum(0, 2);
    const calc = (first, second, op) => {
      let result = first;
      if (op === '+') {
        result = first + second;
      } else if (op === '-') {
        result = first - second;
      } else if (op === '*') {
        result = first * second;
      }
      return result;
    };
    const answer = +q.askQuestion(`${ofirst} ${ops[i]} ${osecond}`);
    const ranswer = calc(ofirst, osecond, ops[i]);
    if (answer !== ranswer) {
      q.isWrong(answer, ranswer, name);
      return false;
    }
    count += 1;
    q.isCorrect();
  }
  q.сongratulate(name);
  return true;
};
