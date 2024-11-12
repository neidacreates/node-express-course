//asynchronously, nonblocking

// my code
const { readFile, writeFile } = require('fs');
console.log("start")
writeFile(
  './temporary/fileB.txt',
  'this is the first line\n', 
  (err) => {
    if (err) {
      console.log(err);
      return
    }
  
  writeFile(
    './temporary/fileB.txt',
    'this is the second line\n',
    {flag: 'a'},
    (err) => {
      if (err) {
        console.log(err);
        return
      }
    
      writeFile(
        './temporary/fileB.txt',
        'this is the third line\n',
        {flag: 'a'},
        (err) => {
          if (err) {
            console.log(err);
            return
          }
        
        readFile('./temporary/fileB.txt', "utf8", (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(data);
        }
        )
    })
  })
  console.log("finished first tasks")
})

console.log("starting next task")
// example from video:
// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   const first = result;
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result;
//     writeFile(
//       './temporary/fileB.txt',
//       `hello this is the async version!: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log("this is the error:", err)
//           return
//         }
//         console.log('finished tasks')
//       }
//     )
//   })
// })
// console.log(readFile('./temporary/fileB.txt', 'utf8', 
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     console.log("this is the data:", data);
//   }
// ))
