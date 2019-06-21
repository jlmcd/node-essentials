let EventEmitter = require('events').EventEmitter

// FUNCTION THAT EMITS EVENTS EVERY SECOND
let getResource = c => {
  let e = new EventEmitter()
  process.nextTick(() => {
    let count = 0;
    e.emit('start')
    let t = setInterval(() => {
      e.emit('data', ++count)
      if (count === c) {
        e.emit('end', count)
        clearInterval(t)
      }
    }, 1000)
  })
  return(e)
}

let r = getResource(5)

// SUBSCRIBING TO EVENT EMITTERS (EVENT LISTENERS?)

r.on('start', () => console.log(`I've started!`))

r.on('data', d => console.log(`I received data -> ${d}`))

r.on('end', t => console.log(`I'm done, with ${t} data events`))