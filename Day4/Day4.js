const { readFileLinesFiltered } = require('../Utils/fileUtils');

const INPUT_FILE = 'Day4/input.txt';
// const INPUT_FILE = 'Day4/example.txt';

count = 0;

function main() {
  const lines = readFileLinesFiltered(INPUT_FILE);
  let previousCount = count;
  let changed = true;
  while (changed) {
    previousCount = count;
    processLines(lines);
    if (previousCount === count) {
      changed = false;
    }
    // for part 1
    // changed = false;

  }
  console.log(count);
}

function processLines(lines) {
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      
      if (lines[y][x] === '.' || lines[y][x] === 'x') {
        continue;
      }
      else if (lines[y][x] === '@') {
        valid = checkPaper(lines, y, x);
        if (valid) {
          count++;
          // disable for part 1
          lines[y] = lines[y].slice(0, x) + 'x' + lines[y].slice(x + 1);
        }
      }
    }
  }
}

function checkPaper(lines, y, x) {
  let paperCounts = 0;
  for (let yi = y-1; yi <= y+1; yi++) {
    if (yi >= 0 && yi < lines.length) {
      for (let xi = x-1; xi <= x+1; xi++) {
        if (xi >= 0 && xi < lines[yi].length) {
          if (lines[yi][xi] === '@') {
            paperCounts++;
          }
          
        }
      }
    }
  }
  return paperCounts <= 4;
}

main()
