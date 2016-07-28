#!/usr/bin/env node

/**
 * Commit empty and push to sugo-scaffold
 */

process.chdir(`${__dirname}/../..`)

const { pushOtherRepository } = require('sg-travis')

pushOtherRepository({
  repository: 'sugos-index'
})
