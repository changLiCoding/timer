const argvs = process.argv.slice(2);
console.log(argvs);

const setTimeBeep = (times) => {
  if (times.length === 0) {
    console.log("Invalid input. ");
    return;
  }

  times.forEach(time => {
    if (!parseInt(time)) {
      console.log('Invalide input. ');
      return;
    }
    if (time < 0) {
      return;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  });
};

setTimeBeep(argvs);
