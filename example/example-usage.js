#!/usr/bin/env node
'use strict'

const co = require('co')
const sugoTerminal = require('sugo-terminal')

const CLOUD_URL = 'my-sugo-cloud.example.com'

co(function * () {
  // Create an terminal
  let terminal = sugoTerminal(CLOUD_URL, {})

  // Connect to remote spot
  let mac = yield terminal.connect('my-mac-book-01')
  let windows = yield terminal.connect('my-windows-pc-01')

  // Access shell interface of the mac machine
  let shell = mac.shell()
  // Access kinect sensor on the windows machine
  let kinect = windows.kinect()

  kinect.on('bodyFrame', () => co(function * (bodyFrame) {
    shell.spawn('play', [ '~/Musics/pin.wav' ])
    /* ... */
  }))
})

