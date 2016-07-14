#!/usr/bin/env node
/**
 * Run examples
 */
'use strict'

process.chdir(`${__dirname}/..`)

const { fork } = require('child_process')
const exampleCloud = require.resolve('../example/example-cloud')
const exampleSpot = require.resolve('../example/example-spot')
const exampleTerminal = require.resolve('../example/example-terminal')
const asleep = require('asleep')
const co = require('co')

co(function * () {
  let cloud = fork(exampleCloud, { stdio: 'inherit' })
  yield asleep(500)
  let spot = fork(exampleSpot, { stdio: 'inherit' })
  yield asleep(500)
  let terminal = fork(exampleTerminal, { stdio: 'inherit' })
  yield asleep(11000)
  terminal.kill()
  spot.kill()
  cloud.kill()
}).catch((err) => console.error(err))

