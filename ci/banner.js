#!/usr/bin/env node
/**
 * Generate banner
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const sugosAssets = require('sugos-assets')

apeTasking.runTasks('banner', [
  () => sugosAssets.banner(
    'sugos',
    'doc/images/banner.svg'
  )
])
