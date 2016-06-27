#!/usr/bin/env node
/**
 * Generate favicon
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const sugosAssets = require('sugos-assets')

apeTasking.runTasks('favicon', [
  () => sugosAssets.favicon(
    'sugos',
    'doc/images/favicon.svg'
  )
])
