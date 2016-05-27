#!/usr/bin/env node

/**
 * Run spot server inside LAN
 */
'use strict'

const sugoSpot = require('sugo-spot')

const CLOUD_URL = 'my-sugo-cloud.example.com'

let spot = sugoSpot(CLOUD_URL, {
  key: 'my-spot-01',
  interfaces: {
    // Add plugin to provide bash interface
    bash: require('sugo-spot-bash')({})
  }
})

// Connect to cloud server
spot.connect()
