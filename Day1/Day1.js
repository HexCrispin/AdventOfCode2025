const { readFileLines } = require('../Utils/fileUtils');

const DIAL_START_NUMBER = 50;
const DIAL_BOTTOM_NUMBER = 0;
const DIAL_TOP_NUMBER = 99;
const DIAL_MODULO = DIAL_TOP_NUMBER - DIAL_BOTTOM_NUMBER + 1;
const INPUT_FILE = 'Day1/input.txt';
// const INPUT_FILE = 'Day1/example.txt';

let timesZero=0



dialNumber = DIAL_START_NUMBER;

function main() {
  dialNumber = DIAL_START_NUMBER;
  
  const lines = readFileLines(INPUT_FILE);
  lines.forEach(line => {
    processLine(line);
  });
  
  console.log("\nFinal Dial Number:", dialNumber);
  console.log("Total Times Past Zero:", timesZero);
}

function turnDial(direction , steps) {
  let initialDialNumber = dialNumber;
    if (direction === "L") {
        dialNumber -= steps;
        if (initialDialNumber != 0 && dialNumber % DIAL_MODULO === 0) {
          timesZero ++;
        }
        if( initialDialNumber == 0 && steps != 0 ) {
          timesZero --;
        }
    } 

    else if (direction === "R") {
        dialNumber += steps;
    }
    
    

    while (dialNumber < DIAL_BOTTOM_NUMBER || dialNumber > DIAL_TOP_NUMBER) {
      if (dialNumber < DIAL_BOTTOM_NUMBER) {
        dialNumber = DIAL_TOP_NUMBER + dialNumber +1;
        timesZero ++;
      }
      else if (dialNumber > DIAL_TOP_NUMBER) {
        dialNumber = dialNumber - DIAL_TOP_NUMBER -1;
        timesZero ++;
      }
    }
    return dialNumber;
}

function processLine(line) {
  const direction = line[0];
  const steps = parseInt(line.substring(1));
  turnDial(direction, steps);
  
  console.log(`${direction}${steps} -> Dial: ${dialNumber}, Zero Count: ${timesZero}`);
}

main()

