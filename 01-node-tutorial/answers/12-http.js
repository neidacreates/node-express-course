const http = require('http');

// req = incoming request
// res = response that we send back



const server = http.createServer((req, res) => {
if (req.url === '/') {
  res.end('Welcome to our home page')
} else if (req.url === '/about') {
  res.end('Here is our history')
} else {
  res.end(`
  <h1>sorry!</h1>
  <p>the page you want doesnt exist yet</p>
  <a href="/">go back home</a>
  `)
}
})

// port the server will listen to 
server.listen(3000)

// video example - throws an error:

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//   res.end('Welcome to our homepage')
//   }
//   if(req.url === "/about") {
//     res.end("Here is our history")
//   }
//   res.end(`
//     <h1> Oops! </h1>
//     <p> can't find the page you are looking for! </p>
//     <a href="/">back to homepage</>
//     `)
// })