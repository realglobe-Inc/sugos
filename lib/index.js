/**
 * Super Ultra Gorgeous Outstanding Special framework for IOT
 * @module sugos
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get cloud () { return d(require('./cloud')) },
  get spot () { return d(require('./spot')) },
  get terminal () { return d(require('./terminal')) }
}
