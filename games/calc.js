import engine from '../src/index.js';
import getRandomNum from '../src/utils.js';

const toCalc = (first, second, op) => {
  let result = first;
  switch (op) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      result = first + second;
  }
  return +result;
};

const pointGame = 'What is the result of the expression?';
export default () => {
  const ops = ['*', '+', '-'];
  let ofirst = 0;
  let osecond = 0;
  let i = '';
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    ofirst = getRandomNum(-100, 100);
    osecond = getRandomNum(-100, 100);
    i = getRandomNum(0, 2);
    paramGame.question = `Question: ${ofirst} ${ops[i]} ${osecond}`;
    paramGame.correctAnswer = toCalc(ofirst, osecond, ops[i]);
    paramGame = engine(paramGame);
  }
  return true;
};
