/**
 * A high-level RPC framework to make remote controlling super easy.
 * @module sugos
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get actor () { return d(require('./actor')) },
  get caller () { return d(require('./caller')) },
  get cloud () { return d(require('./cloud')) }
}
