const { createReadStream } = require('fs');
const stream = createReadStream('../content/big.txt', {encoding: 'utf8'}, { highWaterMark: 200 });

let count = 0;
stream.on('data', (chunk) => {
  count++;
  console.log('received this chunk: ', chunk);
});

stream.on('end', () => {
  console.log('Number of chunks received: ', count);
});

stream.on('error', (error) => {
  console.log('This error happened: ', error);
});