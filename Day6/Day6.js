const { readFileLinesFiltered } = require('../Utils/fileUtils');

const INPUT_FILE = 'Day6/input.txt';
// const INPUT_FILE = 'Day6/example.txt';

count = 0;
version = 2;

function main() {
  const lines = readFileLinesFiltered(INPUT_FILE);
  totalValues =processLines(lines);
  console.log(totalValues.reduce((a, b) => a + b, 0));
}



function processLines(lines) {
  let regexAnySpaces = /\s+/;
  let operationList = lines[lines.length - 1].trim().split(regexAnySpaces);
  let operations = operationList.map(operation => operation);
  let totalValues = Array.from({ length: operations.length }, (_, i) => parseInt(lines[0].trim().split(regexAnySpaces)[i]));
  for( let i = 1; i < lines.length - 1; i++) {
    let line = lines[i];
    let values = line.trim().split(regexAnySpaces);
    for( let j = 0; j < values.length; j++) {
      switch(operations[j]) {
        case '+':
          console.log(`${totalValues[j]} + ${values[j]} = ${totalValues[j] + parseInt(values[j])}`);
          totalValues[j] += parseInt(values[j]);
          break;
        case '*':
          console.log(`${totalValues[j]} * ${values[j]} = ${totalValues[j] * parseInt(values[j])}`);
          totalValues[j] *= parseInt(values[j]);
          break;
        default:
          break;
      }
    }
  }
  return totalValues;
}


main();
