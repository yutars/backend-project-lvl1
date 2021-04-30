import startQuest, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';
export default () => {
  let geomProgression = [];
  const qna = [];
  qna.push(description);
  qna.push([]);
  for (let j = maxCountRounds; j > 0; j -= 1) {
    const progLength = getRandomNum(5, 10);
    const randomEl = getRandomNum(0, progLength - 1);
    const firstEl = getRandomNum(0, 100);
    const step = getRandomNum(1, 5);
    geomProgression[0] = firstEl;
    for (let i = 1; i < progLength; i += 1) {
      geomProgression.push(`${geomProgression[0] + i * step}`);
    }
    let withoutMemberProgression = '';
    for (let i = 0; i < progLength; i += 1) {
      if (i !== randomEl) {
        withoutMemberProgression += `${geomProgression[i]} `;
      } else withoutMemberProgression += '.. ';
    }
    const question = `Question: ${withoutMemberProgression}`;
    const correctAnswer = geomProgression[0] + randomEl * step;
    geomProgression = [];
    const questionAndAnswer = 1;
    qna[questionAndAnswer].push([question, correctAnswer]);
  }
  startQuest(qna);
  return true;
};
