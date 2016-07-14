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
      // Define modules
      tableTennis: {
        // Define methods
        ping (ctx) {
          let { params } = ctx
          let [ pong ] = params // Params passed from terminal
          return co(function * () {
            /* ... */
            return `"${pong}" from spot!`
          })
        }
      }
    }
  })
  yield spot.connect() // Connect to cloud server
}).catch((err) => console.error(err))
