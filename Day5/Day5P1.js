const { readFileLinesFilteredEmpties } = require('../Utils/fileUtils');

const INPUT_FILE = 'Day5/input.txt';
// const INPUT_FILE = 'Day5/example.txt';

count = 0;
version = 2;

function main() {
  const lines = readFileLinesFilteredEmpties(INPUT_FILE);
  const { freshRanges, ingredients } = processLines(lines);
  if (version === 1) {
    ingredients.forEach(ingredient => {
      if (checkIfFresh(freshRanges, ingredient)) {
        count++;
      }
    });
  }
  else if (version === 2) {
    nonOverlappingRanges = freshRanges
    repeats = 0;
    improving = true;
    while (improving || repeats < 100) {
      improving = false;
      previousNonOverlappingRangeLength = nonOverlappingRanges.length;
      nonOverlappingRanges = checkOverlapping(nonOverlappingRanges);
      if (previousNonOverlappingRangeLength > nonOverlappingRanges.length) {
        improving = true;
      }
      repeats++;
    }
    for (range of nonOverlappingRanges) {
      count += range.end - range.start + 1;
    }

  }
  console.log(count);
}


function checkOverlapping(checkRange) {
  nonOverlappingRanges = []
  for (rangeToAdd of checkRange) {
    added = false;
    for (let j = 0; j < nonOverlappingRanges.length; j++) {
      if (rangeToAdd.start >= nonOverlappingRanges[j].start && rangeToAdd.end <= nonOverlappingRanges[j].end) {
        added = true;
        break;
      }
      else if (rangeToAdd.start >= nonOverlappingRanges[j].start && rangeToAdd.start <= nonOverlappingRanges[j].end) {
        nonOverlappingRanges[j].end = rangeToAdd.end;
        added = true;
        break;
      }
      else if (rangeToAdd.end >= nonOverlappingRanges[j].start && rangeToAdd.end <= nonOverlappingRanges[j].end) {
        nonOverlappingRanges[j].start = angeToAdd.start;
        added = true;
        break;
      }
    }
    if (added == false) {
      nonOverlappingRanges.push(rangeToAdd);
    }
  }
  return nonOverlappingRanges;
}

function checkIfFresh(freshRanges, ingredient) {
  for (const freshRange of freshRanges) {
    if (ingredient >= freshRange.start && ingredient <= freshRange.end) {
      return true;
    }
  }
  return false;
}

function processLines(lines) {
  const split = lines.findIndex(line => line.trim() === '');
  const freshRanges = processFreshRanges(lines.slice(0, split));
  const ingredients = lines.slice(split + 1);
  return { freshRanges, ingredients };
}

function processFreshRanges(freshRanges) {
  return freshRanges.map(range => {
    const [start, end] = range.split('-');
    return { start: parseInt(start), end: parseInt(end) };
  }).sort((a, b) => a.start - b.start);
}

main()
