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
      // Add plugin to provide shell interface
      shell: require('sugo-interface-shell')({})
    }
  })

// Connect to cloud server
  yield spot.connect()
}).catch((err) => console.error(err))
