import engine from '../src/index.js';
import getRandomNum from '../src/utils.js';

const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return gcd(b, a % b);
};

const pointGame = 'Find the greatest common divisor of given numbers.';
export default () => {
  let c = 0;
  let d = 0;
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    c = +getRandomNum(-100, 100);
    d = +getRandomNum(-100, 100);
    paramGame.question = `Question: ${c} ${d}`;
    paramGame.correctAnswer = gcd(c, d);
    paramGame = engine(paramGame);
  }
  return true;
};
