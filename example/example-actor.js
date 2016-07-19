#!/usr/bin/env

/**
 * This is an example of SUGO-Actor
 */
'use strict'

const sugoActor = require('sugo-actor')
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let actor = sugoActor(`${CLOUD_URL}/actors`, {
    /** Name to identify this actor on the cloud */
    key: 'my-actor-01',
    /** Modules to provide */
    modules: {
      // Example of a simple call-return function module
      tableTennis: {
        ping (pong = 'default pong!') {
          return co(function * () {
            /* ... */
            return `"${pong}" from actor!` // Return to the remote caller
          })
        }
      },
      // Load plugin module
      timeBomb: require('./example-time-bomb-module')({})
    }
  })
  yield actor.connect() // Connect to cloud server
}).catch((err) => console.error(err))
