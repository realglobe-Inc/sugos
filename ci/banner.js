#!/usr/bin/env node
/**
 * Generate banner
 */
'use strict'

process.chdir(`${__dirname}/..`)

const co = require('co')
const apeTasking = require('ape-tasking')
const sugosAssets = require('sugos-assets')

apeTasking.runTasks('banner', [
  () => co(function * () {
    let banners = {
      'doc/images/banner.svg': [ 'sugos', {} ],
      'doc/images/banner-cloud.svg': [ 'module', { name: 'SUGO-Cloud' } ],
      'doc/images/banner-spot.svg': [ 'module', { name: 'SUGO-Spot' } ],
      'doc/images/banner-terminal.svg': [ 'module', { name: 'SUGO-Terminal' } ]
    }
    for (let filename of Object.keys(banners)) {
      let [ type, config ] = banners[ filename ]
      yield sugosAssets.banner(type, filename, config)
    }
  })
])
