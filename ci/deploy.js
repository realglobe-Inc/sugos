#!/usr/bin/env node

/**
 * Deploy docs to github pages
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeDeploying = require('ape-deploying')

const ghPagesDir = 'doc'

apeTasking.runTasks('deploy', [
  () => apeDeploying.deployGhPages(ghPagesDir)
], true)
