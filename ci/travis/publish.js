#!/usr/bin/env node

/**
 * Publish npm package
 */

process.chdir(`${__dirname}/../..`)

const { publishNpm } = require('sugos-travis')

publishNpm({})
