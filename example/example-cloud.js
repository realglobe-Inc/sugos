#!/usr/bin/env node
/**
 * This is an example of SUGO-cloud
 * @see https://github.com/realglobe-Inc/sugo-hub
 */
'use strict'

const sugoHub = require('sugo-hub')
const co = require('co')

co(function * () {
  // Start sugo-hub server
  let cloud = yield sugoHub({
    // Options
    port: 3000
  })
  console.log(`SUGO Cloud started at port: ${cloud.port}`)
}).catch((err) => { /* ... */ })
