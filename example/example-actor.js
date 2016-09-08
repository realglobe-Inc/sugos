#!/usr/bin/env

/**
 * This is an example of SUGO-Actor
 * @see https://github.com/realglobe-Inc/sugo-actor
 */
'use strict'

const sugoActor = require('sugo-actor')
const { Module } = sugoActor
const co = require('co')

co(function * () {
  let actor = sugoActor({
    /** Host of hub to connect */
    hostname: 'localhost',
    port: 3000,
    /** Name to identify this actor on the hub */
    key: 'my-actor-01',
    /** Modules to provide */
    modules: {
      // Example of a simple call-return function module
      tableTennis: new Module({
        ping (pong = 'default pong!') {
          return co(function * () {
            /* ... */
            return `"${pong}" from actor!` // Return to the remote caller
          })
        }
      }),
      // Load plugin module
      timeBomb: require('./example-time-bomb-module')({})
    }
  })
  yield actor.connect() // Connect to the hub server
}).catch((err) => console.error(err))
