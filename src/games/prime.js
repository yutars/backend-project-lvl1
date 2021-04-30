import startQuest, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const isNumberPrime = (n) => {
  if (n > 1) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  const qna = [];
  qna.push(description);
  qna.push([]);
  for (let j = maxCountRounds; j > 0; j -= 1) {
    const randomNum = getRandomNum(2, 20);
    const question = `Question: ${randomNum}`;
    const correctAnswer = isNumberPrime(randomNum);
    const questionAndAnswer = 1;
    qna[questionAndAnswer].push([question, correctAnswer]);
  }
  startQuest(qna);
  return true;
};
