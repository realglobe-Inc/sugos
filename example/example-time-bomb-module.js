/**
 * This is an example module
 */
'use strict'

const co = require('co')

/** @lends exampleTimeBombModule */
function exampleTimeBombModule (config) {
  return {
    // Example of event emitting function
    countdown (ctx) {
      let { params, pipe } = ctx
      let [count] = params
      return co(function * () {
        pipe.on('abort', () => {
          count = -1
        }) // Listen to events from the remote terminal
        while (count > 0) {
          count--
          pipe.emit('tick', { count }) // Emit an event to the remote terminal
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
