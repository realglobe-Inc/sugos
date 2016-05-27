#!/usr/bin/env node

/**
 * Measure test coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage('_mocha', [
    '-t', 6000, 'test/*_test.js'
  ], {
    dir: 'coverage'
  })
], true)
