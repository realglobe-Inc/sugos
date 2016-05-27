/**
 * Test case for index.
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')
const co = require('co')

describe('cloud', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Index', () => co(function * () {
    for (let name of Object.keys(index)) {
      assert.ok(index[ name ])
    }
  }))
})

/* global describe, before, after, it */
