const os = require('os');

// info about current user
const user = os.userInfo()
console.log(user)

//method returns system uptime
console.log(`System uptime is: ${os.uptime()} seconds`)

// os details are returned by these functions
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS)

