import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';
const generateRound = () => {
  let geomProgression = [];
  const progLength = getRandomNum(5, 10);
  const hiddenElementIndex = getRandomNum(0, progLength - 1);
  const firstEl = getRandomNum(0, 100);
  const step = getRandomNum(1, 5);
  _.range(progLength).forEach((element) => {
    if (element !== hiddenElementIndex) {
      geomProgression.push(firstEl + element * step);
    } else {
      geomProgression.push('..');
    }
  });
  const question = geomProgression.join(' ');
  const correctAnswer = (firstEl + hiddenElementIndex * step).toString();
  geomProgression = [];
  return [question, correctAnswer];
};
export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
