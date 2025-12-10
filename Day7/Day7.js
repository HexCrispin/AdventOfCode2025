const { readFileLinesFiltered } = require('../Utils/fileUtils');

const INPUT_FILE = 'Day7/input.txt';
// const INPUT_FILE = 'Day7/example.txt';

let count = 0;

function main() {
  const lines = readFileLinesFiltered(INPUT_FILE);
  processLines(lines);

}



function processLines(lines) {
  
  let start = lines.shift().indexOf('S')
  let beamSplits = [start]
  lines.forEach(line => {
    console.log("")
    console.log(makeVisual(line, beamSplits))
    console.log(line)
    let tempBeamSplits = []
    beamSplits.forEach(split => {
      if (line[split] === '^') {
        addCount = false
        if(tempBeamSplits.indexOf(split - 1) === -1) {
          addCount = true
          tempBeamSplits.push(split - 1)
        }
        if(tempBeamSplits.indexOf(split + 1) === -1) {
          addCount = true
          tempBeamSplits.push(split + 1)
        }
        if(addCount) {
          count += 1
        }
      }
      else {
        tempBeamSplits.push(split)
      }
    })
    beamSplits = tempBeamSplits
    console.log(makeVisual(line, beamSplits))
    console.log(beamSplits)
    console.log(count)
  })
  console.log(beamSplits)
  console.log(count)
}

function makeVisual(line, beamSplits) {
  let visual = []
  Array.from({ length: line.length }, (_, i) => {
    visual.push('.')
  })
  beamSplits.forEach(split => {
    visual[split] = '|'
  })
  return visual.join('')
}

main();
