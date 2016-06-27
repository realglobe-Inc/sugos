#!/usr/bin/env node

/**
 * This is an example to use terminal to connect remote spot
 */
'use strict'

const co = require('co')
const sugoTerminal = require('sugo-terminal')

const CLOUD_URL = 'my-sugo-cloud.example.com/terminals'
const TARGET_SPOT_ID = 'my-spot-01'

co(function * () {
  let terminal = sugoTerminal(CLOUD_URL, {})

// Connect to the target spot
  let spot = yield terminal.connect(TARGET_SPOT_ID)
  let shell = spot.shell() // Get bash interface

  // Trigger ls command on remote spot
  {
    let lsResult = yield shell.exec('ls -la /opt/shared')
    console.log(lsResult)
  }

  // Pipe std out
  {
    let out = (chunk) => process.stdout.write(chunk)
    shell.on('stdout', out)
    yield shell.spawn('tail -f /var/log/app.log') // Trigger tailing without blocking
    yield new Promise((resolve) => setTimeout(() => resolve(), 3000)) // Block for duration
    shell.off('stdout', out)
  }

  // Run reboot command
  yield shell.exec('reboot')
}).catch((err) => console.error(err))

