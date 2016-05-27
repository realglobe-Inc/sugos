#!/usr/bin/env node

/**
 * Setup cloud server
 */

'use strict'

const co = require('co')
const sugoCloud = require('sugo-cloud')

co(function * () {
  let cloud = yield sugoCloud({
    // Options
    port : 3000
  })

  process.on('beforeExit', () => co(function * () {
    yield cloud.close()
  }))
})
