import * as q from '../src/index.js';

export default async () => {
  const name = q.prompt();
  console.log('Find the greatest common divisor of given numbers.');
  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };
  let count = 0;
  while (count < q.maxCountRounds()) {
    const c = q.randomNum(-100, 100);
    const d = q.randomNum(-100, 100);
    const answer = +q.Question(`${c} ${d}`);
    const ranswer = gcd(c, d);
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
