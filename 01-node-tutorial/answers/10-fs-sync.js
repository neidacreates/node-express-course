//synchronously, blocking

// destructuring
const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second)

writeFileSync(
  './temporary/fileA.txt', 
  `hello world! this is the new file: ${first}, ${second}\n`,
  {flag: 'a'}
)
writeFileSync(
  './temporary/fileA.txt', 
  'this is the second thing we write\n',
  {flag: 'a'}
)
writeFileSync(
  './temporary/fileA.txt', 
  'this is the third thing we write\n',
  {flag: 'a'}
)
console.log("finished reading and writing files")
console.log("moving on to next task")
console.log(readFileSync('./temporary/fileA.txt', 'utf8'))
console.log("finshed all tasks")