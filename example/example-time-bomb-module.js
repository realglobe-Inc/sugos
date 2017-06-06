/**
 * This is an example module
 */
'use strict'

const { Module } = require('sugo-actor')

class TimeBomb extends Module {
  // Example of event emitting function
  async countDown (count) {
    const s = this
    let abort = () => { count = -1 }
    s.on('abort', abort) // Listen to events from the caller
    while (count > 0) {
      count--
      s.emit('tick', { count }) // Emit an event to the caller
      await new Promise((resolve) =>
        setTimeout(() => resolve(), 1000)
      )
    }
    s.off('abort', abort) // Remove event listener
    return count === -1 ? 'hiss...' : 'booom!!!'
  }
}

function newTimeBomb (...args) {
  return new TimeBomb(...args)
}

module.exports = newTimeBomb // Pass factory method
