#!/usr/bin/env node
/**
 * Run examples
 */
'use strict'

process.chdir(`${__dirname}/..`)

const { fork } = require('child_process')
const exampleCloud = require.resolve('../example/example-cloud')
const exampleActor = require.resolve('../example/example-actor')
const exampleCaller = require.resolve('../example/example-caller')
const asleep = require('asleep')
const co = require('co')

co(function * () {
  let cloud = fork(exampleCloud, { stdio: 'inherit' })
  yield asleep(500)
  let spot = fork(exampleActor, { stdio: 'inherit' })
  yield asleep(500)
  let caller = fork(exampleCaller, { stdio: 'inherit' })
  yield asleep(11000)
  caller.kill()
  spot.kill()
  cloud.kill()
}).catch((err) => console.error(err))

