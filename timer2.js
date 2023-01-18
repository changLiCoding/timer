const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
////////////
// Event Handling for User Input
////////////

const setTimeBeep = (time) => {
  console.log(`Setting timer for ${time} seconds beep... `);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(time) * 1000);
};
stdin.on('data',(key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (!isNaN(Number(key))) {
    setTimeBeep(key);
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  //process.stdout.write('.');
});

console.log('after callback');


