import * as q from '../src/index.js';
import * as rnd from '../src/rnd.js';

export default async () => {
  const name = q.invite();
  q.getPointGame('Find the greatest common divisor of given numbers.');
  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };
  let count = 0;
  while (count < q.getMaxCountRounds()) {
    const c = +rnd.getRandomNum(-100, 100);
    const d = +rnd.getRandomNum(-100, 100);
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
