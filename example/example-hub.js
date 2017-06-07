#!/usr/bin/env node
/**
 * This is an example of SUGO-Hub
 * @see https://github.com/realglobe-Inc/sugo-hub
 */
'use strict'

const sugoHub = require('sugo-hub')

;(async () => {
  // Start sugo-hub server
  let hub = await sugoHub({}).listen(3000)
  console.log(`SUGO Hub started at port: ${hub.port}`)
}).catch((err) => console.error(err))
