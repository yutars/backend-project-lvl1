import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

const pointGame = 'What number is missing in the progression?';
export default () => {
  let progLength = 0;
  let randomEl = 0;
  let firstEl = 0;
  let step = 0;
  let geomProgression = [];
  let withoutMemberProgression = '';
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = q.engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    progLength = utils.getRandomNum(5, 10);
    randomEl = utils.getRandomNum(0, progLength - 1);
    firstEl = utils.getRandomNum(0, 100);
    step = utils.getRandomNum(1, 5);
    geomProgression[0] = firstEl;
    for (let i = 1; i < progLength; i += 1) {
      geomProgression.push(`${geomProgression[0] + i * step}`);
    }
    withoutMemberProgression = '';
    for (let i = 0; i < progLength; i += 1) {
      if (i !== randomEl) {
        withoutMemberProgression += `${geomProgression[i]} `;
      } else withoutMemberProgression += '.. ';
    }
    paramGame.question = withoutMemberProgression;
    paramGame.correctAnswer = geomProgression[0] + randomEl * step;
    geomProgression = [];
    paramGame = q.engine(paramGame);
  }
  return true;
};
