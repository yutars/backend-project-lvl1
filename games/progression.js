import * as q from '../src/index.js';
import * as rnd from '../src/rnd.js';

export default async () => {
  const name = q.invite();
  q.getPointGame('What number is missing in the progression?');
  let count = 0;
  while (count < q.getMaxCountRounds()) {
    const progLength = rnd.getRandomNum(5, 10);
    const randomEl = rnd.getRandomNum(0, progLength - 1);
    const firstEl = rnd.getRandomNum(0, 100);
    const step = rnd.getRandomNum(1, 5);
    const arr = [];
    arr[0] = firstEl;
    for (let i = 1; i < progLength; i += 1) {
      arr.push(`${arr[0] + i * step}`);
    }
    let str = '';
    for (let i = 0; i < progLength; i += 1) {
      if (i !== randomEl) {
        str += `${arr[i]} `;
      } else str += '.. ';
    }
    const answer = +q.askQuestion(str);
    const ranswer = arr[0] + randomEl * step;
    if (answer !== ranswer) {
      q.isWrong(answer, ranswer, name);
      return false;
    }
    count += 1;
    q.isCorrect();
  }
  q.Congratulate(name);
  return true;
};
