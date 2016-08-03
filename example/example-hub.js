#!/usr/bin/env node
/**
 * This is an example of SUGO-hub
 * @see https://github.com/realglobe-Inc/sugo-hub
 */
'use strict'

const sugoHub = require('sugo-hub')
const co = require('co')

co(function * () {
  // Start sugo-hub server
  let hub = yield sugoHub({
    // Options
    port: 3000
  })
  console.log(`SUGO Hub started at port: ${hub.port}`)
}).catch((err) => { /* ... */ })
