#!/usr/bin/env

/**
 * This is an example of SUGO-Caller
 */
'use strict'

const sugoCaller = require('sugo-caller')
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let caller = sugoCaller(`${CLOUD_URL}/callers`)
  // Connect to a remote actor with key
  let actor01 = yield caller.connect('my-actor-01')

  // Using call-return function
  let tableTennis = actor01.tableTennis()
  let pong = yield tableTennis.ping('hey!')
  console.log(pong) // -> `"hey!" from call!`

  // Using event emitting interface
  let timeBomb = actor01.timeBomb()
  timeBomb.on('tick', (data) => console.log(`tick: ${data.count}`))
  let booom = yield timeBomb.countDown(10)
  console.log(booom)
}).catch((err) => console.error(err))
