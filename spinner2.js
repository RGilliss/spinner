const spin = (elem, time) => {
  setTimeout(() => {
    process.stdout.write('\r' + elem + '   ');
  }, time);
};

const loop = (array, time) => {
  for (const elem of array) {
    spin(elem, time);
    time += 200;
  }
};

let spiral = ['|', '/', '--', '\\', '|', '/', '--', '\\', '|'];
loop(spiral, 100);
