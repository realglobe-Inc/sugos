#!/usr/bin/env node
/**
 * Run examples
 */
'use strict'

process.chdir(`${__dirname}/..`)

const { fork } = require('child_process')
const exampleHub = require.resolve('../example/example-hub')
const exampleActor = require.resolve('../example/example-actor')
const exampleCaller = require.resolve('../example/example-caller')
const asleep = require('asleep')
const co = require('co')

co(function * () {
  let cloud = fork(exampleHub, { stdio: 'inherit' })
  yield asleep(800)
  let spot = fork(exampleActor, { stdio: 'inherit' })
  yield asleep(800)
  let caller = fork(exampleCaller, { stdio: 'inherit' })
  yield asleep(11000)
  caller.kill()
  spot.kill()
  cloud.kill()
}).catch((err) => console.error(err))

