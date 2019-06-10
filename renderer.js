// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron')
console.log('symbol from main', remote.getGlobal('mySymbol'))
console.log('string from main', remote.getGlobal('myString'))