#!/usr/bin/env

/**
 * This is an example of SUGO-Caller
 * @see https://github.com/realglobe-Inc/sugo-caller
 */
'use strict'

const sugoCaller = require('sugo-caller')
;(async () => {
  let caller = sugoCaller({
    // Host of hub to connect
    hostname: 'localhost',
    port: 3000
  })
  // Connect to an actor with key
  let actor01 = await caller.connect('my-actor-01')

  // Using call-return function
  {
    let tableTennis = actor01.get('tableTennis')
    let pong = await tableTennis.ping('hey!')
    console.log(pong) // -> `"hey!" from actor!`
  }

}).catch((err) => console.error(err))
