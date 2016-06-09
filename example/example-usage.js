#!/usr/bin/env node

/**
 * This is an example to connect remote machines
 */
'use strict'

const co = require('co')
const sugoTerminal = require('sugo-terminal')

const CLOUD_URL = 'my-sugo-cloud.example.com'

co(function * () {
  // Create a terminal instances
  let terminal = sugoTerminal(CLOUD_URL, {})

  // Connect to spot in remote network
  let mac = yield terminal.connect('my-mac-book-01')
  let windows = yield terminal.connect('my-windows-pc-01')

  // Access to interface of spots
  let shell = mac.shell()
  let kinect = windows.kinect()

  // Subscribe event
  kinect.on('bodyFrame', co.wrap(function * handleBodyFrame (bodyFrame) {
    let { leftHand, head } = windows.kinect.helpers.parse(bodyFrame)
    if (leftHand.cameraY > head.cameraY) {
      // Send command and Wait for results
      let result = yield shell.exec('say', [ 'Left hands up!' ])
      /* ... */
    }
  }))

  kinect.start() // Asynchronous operation
}).catch((err) => console.error(err))
