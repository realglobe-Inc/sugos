#!/usr/bin/env

/**
 * This is an example of SUGO-Terminal
 */
'use strict'

const sugoTerminal = require('sugo-terminal')
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let terminal = sugoTerminal(`${CLOUD_URL}/terminals`)
  // Connect to terminal with key of spot
  let spot01 = yield terminal.connect('my-spot-01')

  // Simple call-return function
  let tableTennis = spot01.tableTennis()
  let pong = yield tableTennis.ping('hey!')
  console.log(pong) // -> `"hey!" from spot!`

  // Event emitting
  let timebomb = spot01.timebomb()
  timebomb.on('tick', (data) => console.log(`tick: ${data.count}`))
  let booom = yield timebomb.countdown(10)
  console.log(booom)
}).catch((err) => console.error(err))
