/**
 * Test case for caller.
 * Runs with mocha.
 */
'use strict'

const caller = require('../lib/caller.js')
const assert = require('assert')
const co = require('co')

describe('caller', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Caller', () => co(function * () {
    assert.ok(caller)
  }))
})

/* global describe, before, after, it */
