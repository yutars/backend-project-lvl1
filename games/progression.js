import * as q from '../src/index.js';

export default async () => {
  const name = q.prompt();
  console.log('What number is missing in the progression?');
  let count = 0;
  while (count < q.maxCountRounds()) {
    const progLength = q.randomNum(5, 10);
    const randomEl = q.randomNum(0, progLength - 1);
    const firstEl = q.randomNum(0, 100);
    const step = q.randomNum(1, 5);
    const arr = [];
    arr[0] = firstEl;
    for (let i = 1; i < progLength; i += 1) {
      arr.push(`${arr[0] + i * step} `);
    }
    let str = '';
    for (let i = 0; i < progLength; i += 1) {
      if (i !== randomEl) {
        str += `${arr[i]} `;
      }
      else str += '.. ';
    }
    const answer = +q.Question(str);
    const ranswer = arr[0] + randomEl * step;
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
