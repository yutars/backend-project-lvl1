import startQuest, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  const qna = [];
  qna.push(description);
  qna.push([]);
  for (let j = maxCountRounds; j > 0; j -= 1) {
    const randNum = getRandomNum(1, 100);
    const question = `Question: ${randNum}`;
    const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';
    const questionAndAnswer = 1;
    qna[questionAndAnswer].push([question, correctAnswer]);
  }
  startQuest(qna);
  return true;
};
