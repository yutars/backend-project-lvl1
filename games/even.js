import * as utils from '../src/utils.js';
import * as q from '../src/index.js';

const mod = (num) => {
  const n = num % 2 === 0 ? 'yes' : 'no';
  return n;
};

const pointGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = q.engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    const rnum = utils.getRandomNum(1, 100);
    paramGame.question = `Question: ${rnum}`;
    paramGame.correctAnswer = mod(rnum);
    paramGame = q.engine(paramGame);
  }
  return true;
};
