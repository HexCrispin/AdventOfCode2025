const fs = require('fs');

/**
 * Reads a file and returns its contents as a string
 * @param {string} filePath - Path to the file to read
 * @returns {string} File contents
 */
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Reads a file and returns its contents as an array of lines
 * @param {string} filePath - Path to the file to read
 * @returns {string[]} Array of lines from the file
 */
function readFileLines(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.trim().split('\n');
}

/**
 * Reads a file and returns its contents as an array of lines, filtering out empty lines
 * @param {string} filePath - Path to the file to read
 * @returns {string[]} Array of non-empty lines from the file
 */
function readFileLinesFiltered(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.replace(/\r/g, '').split('\n').filter(line => line.trim() !== '' );
}

/**
 * Reads a file and returns its contents as an array of lines, filtering out empty lines
 * @param {string} filePath - Path to the file to read
 * @returns {string[]} Array of non-empty lines from the file
 */
function readFileLinesFilteredEmpties(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.replace(/\r/g, '').split('\n');
}

module.exports = {
  readFile,
  readFileLines,
  readFileLinesFiltered,
  readFileLinesFilteredEmpties
};

