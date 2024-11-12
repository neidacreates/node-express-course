// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require('./04-names')
const sayHi = require('./05-utils')
const fruits = require('./06-alternative-flavor')

// function is executed when module is imported into a file
require('./07-mind-grenade')

sayHi('susan')
sayHi(john)
sayHi(peter)

// logging the things from 06-alternative-flavor
console.log(fruits)
console.log(fruits.singleFruit)