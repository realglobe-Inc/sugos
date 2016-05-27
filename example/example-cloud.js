#!/usr/bin/env node

/**
 * Setup cloud server
 */

'use strict'

const sugoCloud = require('sugo-cloud')

const co = require('co')

co(function * () {
// Start sugo-cloud server
  let cloud = yield sugoCloud({
    // Options
    port: 3000
  })

  process.on('beforeExit', () => co(function * () {
    yield cloud.close()
  }))
})
