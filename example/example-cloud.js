#!/usr/bin/env node
/**
 * This is an example of SUGO-cloud
 * @see https://github.com/realglobe-Inc/sugo-cloud
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
}).catch((err) => { /* ... */ })
