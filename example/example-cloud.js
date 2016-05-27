#!/usr/bin/env node

/**
 * Setup cloud server
 */

'use strict'

const sugoCloud = require('sugo-cloud')

let cloud = sugoCloud({
  // Options
})

// Start sugo-cloud server on port 3000
// You need exports this to public via reverse proxy like nginx
cloud.listen(3000)
