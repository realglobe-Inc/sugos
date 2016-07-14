#!/usr/bin/env node

/**
 * This is an example to run local spot server
 */

'use strict'

const sugoSpot = require('sugo-spot')
const co = require('co')

const CLOUD_URL = 'http://my-sugo-cloud.example.com/spots'

co(function * () {
  let spot = sugoSpot(CLOUD_URL, {
    key: 'my-spot-01',
    interfaces: {
      // Declare custom function
      ping (ctx) {
        let { params } = ctx
        let [ pong ] = params // Parameters passed from remote terminal
        return co(function * () {
          /* ... */
          return pong // Return value to pass remote terminal
        })
      },
      // Use interface plugin module
      shell: require('sugo-interface-shell')({})
    }
  })

// Connect to cloud server
  yield spot.connect()
}).catch((err) => console.error(err))
