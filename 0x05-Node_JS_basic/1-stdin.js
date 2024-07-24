const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

r1.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  process.exit(0);
});
r1.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
