/**
 * Super Ultra Gorgeous Outstanding Special framework for IOT
 * @module sugos
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get client () { return d(require('./client')) },
  get cloud () { return d(require('./cloud')) },
  get spot () { return d(require('./spot')) }
}
