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
}

module.exports = exampleTimeBombModule