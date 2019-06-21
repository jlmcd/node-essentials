let request = require('request')

let s = request('http://www.pluralsight.com/')

s.on('data', chunk => {
  console.log(`>>>Data>>> ${chunk}`)
})
s.on('end', () => {
  console.log(`>>>Done!>>>`)
})