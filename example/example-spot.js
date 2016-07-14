#!/usr/bin/env

/**
 * This is an example of SUGO-Spot
 */
'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let spot = sugoSpot(`${CLOUD_URL}/spots`, {
    /** Name to identify this spot on the cloud */
    key: 'my-spot-01',
    /** Interface modules to exports */
    interfaces: {
      tableTennis: {
        // Example of simple call-return function
        ping (ctx) {
          let { params } = ctx
          let [ pong ] = params // Params passed from the remote terminal
          return co(function * () {
            /* ... */
            return `"${pong}" from spot!` // Return to the remote terminal
          })
        }
      },
      timebomb: {
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
  })
  yield spot.connect() // Connect to cloud server
}).catch((err) => console.error(err))
