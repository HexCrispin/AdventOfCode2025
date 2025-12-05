const { readFileLinesFiltered } = require('../Utils/fileUtils');

const INPUT_FILE = 'Day3/input.txt';
// const INPUT_FILE = 'Day3/example.txt';

let num = 0;
let backCount = 12
let list = [];

function main() {
  const lines = readFileLinesFiltered(INPUT_FILE);
  lines.forEach(line => {
    processLine(line);
  });
  console.log(num);
}

function processLine(line) {
  let currentHighest = 0;
  let previousHighest = 0;
  for (let i = line.length-2; i >= 0; i--) {
    if(line[i] >= currentHighest) {
      previousHighest = currentHighest;
      currentHighest = line[i];
    }
  }
  if (previousHighest < line[line.length - 1])  {
    previousHighest = line[line.length - 1];
  }
  num +=createNumber(currentHighest, previousHighest);
  console.log(currentHighest, previousHighest, line);
}

function createNumber(currentHighest, previousHighest) {
  return Number(currentHighest + previousHighest);
}

function insertValue(list, index, value) {
  return [
    ...list.slice(0, index),
    value,
    ...list.slice(index)
  ];
}

main()
