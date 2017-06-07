#!/usr/bin/env

/**
 * This is an example of SUGO-Caller to use event emit
 */
'use strict'

const sugoCaller = require('sugo-caller')

;(async () => {
  let caller = sugoCaller({ /* ... */ })
  let actor01 = await caller.connect('my-actor-01')

  // Using event emitting interface
  {
    let timeBomb = actor01.get('timeBomb')
    let tick = (data) => console.log(`tick: ${data.count}`)
    timeBomb.on('tick', tick) // Add listener
    let booom = await timeBomb.countDown(10)
    console.log(booom)
    timeBomb.off('tick', tick) // Remove listener
  }
}).catch((err) => console.error(err))
