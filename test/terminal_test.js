/**
 * Test case for terminal.
 * Runs with mocha.
 */
'use strict'

const terminal = require('../lib/terminal.js')
const assert = require('assert')
const co = require('co')

describe('terminal', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Terminal', () => co(function * () {
    assert.ok(terminal)
  }))
})

/* global describe, before, after, it */
