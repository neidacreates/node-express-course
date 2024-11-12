// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname) // prints directory path
console.log(process.env.MY_VAR)
// print hello world every second
setInterval(() => {
  console.log("hello world")
}, 1000)