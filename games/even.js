import * as rnd from '../src/rnd.js';
import * as q from '../src/index.js';

export default async () => {
  const name = q.invite();
  q.getPointGame('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < q.getMaxCountRounds()) {
    const mod = (num) => {
      const n = num % 2 === 0 ? 'yes' : 'no';
      return n;
    };
    const rnum = rnd.getRndNum(100);
    const answer = q.askQuestion(`Question: ${rnum}`);
    if (answer === mod(rnum)) {
      count += 1;
      q.isCorrect();
    } else {
      q.isWrong(rnum, mod(rnum), name);
      return false;
    }
  }
  q.сongratulate(name);
  return true;
};
