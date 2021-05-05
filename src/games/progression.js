import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';
export default () => {
  let geomProgression = [];
  const rounds = [];
  for (let i = maxCountRounds; i > 0; i -= 1) {
    const progLength = getRandomNum(5, 10);
    const randomEl = getRandomNum(0, progLength - 1);
    const firstEl = getRandomNum(0, 100);
    const step = getRandomNum(1, 5);
    geomProgression[0] = firstEl;
    for (let j = 1; j < progLength; j += 1) {
      geomProgression.push(`${geomProgression[0] + j * step}`);
    }
    let withoutMemberProgression = '';
    for (let j = 0; j < progLength; j += 1) {
      if (j !== randomEl) {
        withoutMemberProgression += `${geomProgression[j]} `;
      } else withoutMemberProgression += '.. ';
    }
    const question = withoutMemberProgression;
    const correctAnswer = geomProgression[0] + randomEl * step;
    geomProgression = [];
    rounds.push([question, correctAnswer.toString()]);
  }
  run(description, rounds);
};
