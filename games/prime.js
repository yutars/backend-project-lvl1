import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

export default () => {
  const isPrime = (n) => {
    if (n > 1) {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return 'no';
      }
      return 'yes';
    }
    return 'no';
  };
  const name = q.invite();
  q.getPointGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  while (count < q.getMaxCountRounds) {
    const rnum = utils.getRandomNum(2, 20);
    const answer = q.askQuestion(rnum);
    const ranswer = isPrime(rnum);
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
