/**
 * Test case for hub.
 * Runs with mocha.
 */
'use strict'

const hub = require('../lib/hub.js')
const assert = require('assert')
const co = require('co')

describe('hub', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Hub', () => co(function * () {
    assert.ok(hub)
  }))
})

/* global describe, before, after, it */
