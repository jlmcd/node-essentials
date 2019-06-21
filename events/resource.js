let util = require('util')
let EventEmitter = require('events').EventEmitter

function Resource(m) {
  let maxEvents = m;
  var self = this;

  process.nextTick(() => {
    let count = 0
    self.emit('start')
    let t = setInterval(() => {
      self.emit('data', ++count)
      if (count === maxEvents) {
        self.emit('end', count)
        clearInterval(t)
      }
    }, 1000);
  })
}

util.inherits(Resource, EventEmitter)

module.exports = Resource