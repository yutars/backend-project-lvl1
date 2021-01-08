import readlineSync from 'readline-sync';

export default async () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (true) {
    const rnum = Math.floor(Math.random() * Math.floor(100));
    console.log(`Question: ${rnum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && rnum % 2 === 0) {
      count += 1;
      console.log('Correct!');
    }
    else if (answer === 'no' && rnum % 2 !== 0) {
      count += 1;
      console.log('Correct!');
    }
    else {
      count = 0;
    }
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};