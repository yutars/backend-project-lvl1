import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

export default () => {
  const name = q.invite();
  q.getPointGame('Find the greatest common divisor of given numbers.');
  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };
  let count = 0;
  while (count < q.getMaxCountRounds) {
    const c = +utils.getRandomNum(-100, 100);
    const d = +utils.getRandomNum(-100, 100);
    const answer = +q.askQuestion(`${c} ${d}`);
    const ranswer = gcd(c, d);
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
