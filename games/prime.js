import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

const isNumberPrime = (n) => {
  if (n > 1) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  }
  return 'no';
};

const pointGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = q.engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    const rnum = utils.getRandomNum(2, 20);
    paramGame.question = `Question: ${rnum}`;
    paramGame.correctAnswer = isNumberPrime(rnum);
    paramGame = q.engine(paramGame);
  }
  return true;
};
