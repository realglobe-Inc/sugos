#!/usr/bin/env node

/**
 * This is an example to setup cloud server
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

  console.log(`SUGO Cloud started at port: ${cloud.port}`)

  return cloud
}).catch((err) => { /* ... */ })
