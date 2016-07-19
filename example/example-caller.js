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
  // Connect to an actor with key
  let actor01 = yield caller.connect('my-actor-01')

  // Using call-return function
  {
    let tableTennis = actor01.get('tableTennis')
    let pong = yield tableTennis.ping('hey!')
    console.log(pong) // -> `"hey!" from call!`
  }

  // Using event emitting interface
  {
    let timeBomb = actor01.get('timeBomb')
    let tick = (data) => console.log(`tick: ${data.count}`)
    timeBomb.on('tick', tick) // Add listener
    let booom = yield timeBomb.countDown(10)
    console.log(booom)
    timeBomb.off('tick', tick) // Remove listener
  }
}).catch((err) => console.error(err))
