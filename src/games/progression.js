import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progLength = getRandomNum(5, 10);
  const hiddenElementIndex = getRandomNum(0, progLength - 1);
  const firstEl = getRandomNum(0, 100);
  const step = getRandomNum(1, 5);
  const geomProgression = _.range(progLength).map((element, index) => {
    if (index === hiddenElementIndex) return '..';
    return firstEl + element * step;
  });
  const question = geomProgression.join(' ');
  const answer = (firstEl + hiddenElementIndex * step).toString();
  return [question, answer];
};

export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
