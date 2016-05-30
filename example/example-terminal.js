'use strict'

const sugoTerminal = require('sugo-terminal')

const CLOUD_URL = 'my-sugo-cloud.example.com'
const TARGET_SPOT_ID = 'my-spot-01'

let terminal = sugoTerminal(CLOUD_URL, {})

// Connect to the target spot
terminal.connect(TARGET_SPOT_ID, function * (spot) {
  let bash = spot.bash() // Get bash interface

  // Trigger ls command on remote spot
  {
    let lsResult = yield bash.exec('ls -la /opt/shared')
    console.log(lsResult)
  }

  // Pipe std out
  {
    let out = (chunk) => process.stdout.write(chunk)
    bash.on('stdout', out)
    bash.exec('tail -f /var/log/app.log') // Trigger tailing without blocking
    yield new Promise((resolve) => setTimeout(() => resolve(), 3000)) // Block for duration
    bash.off('stdout', out)
  }

  // Run reboot command
  yield bash.exec('reboot')
})
