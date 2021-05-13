import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const roundCounter = (maxCount = maxCountRounds) => _.range(maxCount);
const description = 'What number is missing in the progression?';
export default () => {
  let geomProgression = [];
  const rounds = [];
  roundCounter().forEach(() => {
    const progLength = getRandomNum(5, 10);
    const hiddenEl = getRandomNum(0, progLength - 1);
    const firstEl = getRandomNum(0, 100);
    const step = getRandomNum(1, 5);
    _.range(progLength).forEach((element) => {
      if (element !== hiddenEl) {
        geomProgression.push(firstEl + element * step);
      } else {
        geomProgression.push('..');
      }
    });
    const withoutMemberProgression = geomProgression.join(' ');
    const question = withoutMemberProgression;
    const correctAnswer = firstEl + hiddenEl * step;
    geomProgression = [];
    rounds.push([question, correctAnswer.toString()]);
  });
  run(description, rounds);
};
