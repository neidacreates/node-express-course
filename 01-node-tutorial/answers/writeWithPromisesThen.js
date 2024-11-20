const { writeFile, readFile } = require("fs").promises; 

writeFile(
  './temporary/temp.txt',
  "line A\n")
.then(() => {
  console.log("first line was written")
  return writeFile(
    './temporary/temp.txt',
    "line B\n",
    {flag: 'a'})
})
.then( () => {
  console.log("second line was written")
  return writeFile(
    './temporary/temp.txt',
    "line C\n",
    {flag: 'a'})
})
.then(() => {
  console.log("third line was written")
  return readFile(
    './temporary/temp.txt',
    "utf8"
  )
}
).then( (result) => {
  console.log("file was read and data is: ")
  console.log(result)
}
).catch((err) => {
  console.log("an error happened: ", err)
})