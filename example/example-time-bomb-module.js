/**
 * This is an example module
 */
'use strict'

const co = require('co')
const { Module } = require('sugo-actor')

class TimeBomb extends Module {
  // Example of event emitting function
  countDown (count) {
    const s = this
    return co(function * () {
      let abort = () => { count = -1 }
      s.on('abort', abort) // Listen to events from the caller
      while (count > 0) {
        count--
        s.emit('tick', { count }) // Emit an event to the caller
        yield new Promise((resolve) =>
          setTimeout(() => resolve(), 1000)
        )
      }
      s.off('abort', abort) // Remove event listener
      return count === -1 ? 'hiss...' : 'booom!!!'
    })
  }
}

function newTimeBomb (args) {
  return new TimeBomb(...args)
}

module.exports = newTimeBomb // Pass factory method
