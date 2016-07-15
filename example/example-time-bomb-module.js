/**
 * This is an example module
 */
'use strict'

const co = require('co')

/** @lends exampleTimeBombModule */
function exampleTimeBombModule (config) {
  return {
    // Example of event emitting function
    countDown (count) {
      const s = this
      return co(function * () {
        s.on('abort', () => {
          count = -1
        }) // Listen to events from the caller
        while (count > 0) {
          count--
          s.emit('tick', { count }) // Emit an event to the caller
          yield new Promise((resolve) =>
            setTimeout(() => resolve(), 1000)
          )
        }
        return count === -1 ? 'hiss...' : 'booom!!!'
      })
    }
  }
}

module.exports = exampleTimeBombModule
