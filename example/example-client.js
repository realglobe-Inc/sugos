#!/usr/bin/env node

/**
 * Control spot from remote.
 */
'use strict'

const sugoClient = require('sugo-client')

const CLOUD_URL = 'my-sugo-cloud.example.com'
const TARGET_SPOT_ID = 'my-spot-01'

let client = sugoClient(CLOUD_URL, {})

// Connect to the target spot
client.connect(TARGET_SPOT_ID, function * (spot) {
  let bash = spot.bash() // Get bash interface

  // Trigger ls command on remote spot
  let lsResult = yield bash.exec('ls -la /opt/shared')
  console.log(lsResult)

  // Run reboot command
  yield bash.exec('reboot')
})
