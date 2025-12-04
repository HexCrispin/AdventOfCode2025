const { readFileLines } = require('../Utils/fileUtils');

const INPUT_FILE = 'example.txt';


function main() {
  const lines = readFileLines(INPUT_FILE);
  lines.forEach(line => {
    process(line);
  });
}


function process(line) {
  const ranges = line.split(',');

}


main();