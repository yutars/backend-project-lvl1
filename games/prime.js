import * as q from '../src/index.js';

export default async () => {
  const isPrime = (n) => {
    if (n > 1) {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return 'no';
      }
      return 'yes';
    }
    return 'no';
  };
  const name = q.prompt();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  while (count < q.maxCountRounds()) {
    const rnum = q.randomNum(2, 20);
    const answer = q.Question(rnum);
    const ranswer = isPrime(rnum);
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
