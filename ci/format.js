#!/usr/bin/env node

/**
 * Format files.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeFormatting = require('ape-formatting')

apeTasking.runTasks('format', [
  () => apeFormatting.formatJs([
    '.*.bud',
    'lib/.*.bud',
    'example/*.js',
    'doc/mocks/*.js',
    'test/.*.bud'
  ], {
    ignore: [
      'lib/index.js'
    ]
  })
], true)
