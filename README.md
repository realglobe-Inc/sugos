 <img src="assets/images/sugos-banner.png" alt="Title Banner"
                    height="148"
                    style="height:148px"
/>


<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugos
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugos
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugos.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugos
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugos.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugos/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugos
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugos.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugos.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugos
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugos.svg
[bd_npm_url]: http://www.npmjs.org/package/sugos
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugos.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

A high-level RPC framework to make remote controlling super easy.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>

What you can do with SUGOS is:

1. Declare a function on a client.
2. Call the function from another client.

SUGOS magically connect two clients on remote networks, and provides pseudo function interface as if they are on the same environment.

<img src="assets/images/sugos-overview.jpeg" 
    alt="Overview"
/>


It also supports event driven architecture. You can emit or listen remote events in [Node.js events](https://nodejs.org/api/events.html#events_events) style.
This feature greatly helps you to build applications for IoT or Cloud Robotics.


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.TOC.md.hbs" Start -->

<a name="section-doc-guides-00-t-o-c-md"></a>

Table of Contents
----------------

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
  * [Setup SUGO-Cloud](#setup-sugo-cloud)
  * [Declare modules on SUGO-Actor](#declare-modules-on-sugo-actor)
  * [Access to modules from SUGO-Caller](#access-to-modules-from-sugo-caller)
- [Advanced Usage](#advanced-usage)
  * [Using Event-Emit Interface](#using-event-emit-interface)
- [More Examples](#more-examples)
- [Related Packages](#related-packages)
- [Contributors](#contributors)
- [License](#license)
- [Links](#links)


<!-- Section from "doc/guides/00.TOC.md.hbs" End -->

<!-- Section from "doc/guides/10.Requirements.md.hbs" Start -->

<a name="section-doc-guides-10-requirements-md"></a>

Requirements
-----

<a href="https://nodejs.org">
  <img src="assets/images/nodejs-banner.png"
       alt="banner"
       height="40"
       style="height:40px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="assets/images/npm-banner.png"
       alt="banner"
       height="40"
       style="height:40px"
  /></a>

+ [Node.js ( >=6.x )][node_download_url]
+ [npm ( >=3.x )][npm_url]

[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/


<!-- Section from "doc/guides/10.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/11.Installation.md.hbs" Start -->

<a name="section-doc-guides-11-installation-md"></a>

Installation
-----

```bash
# Install sugos as a global module
$ npm install -g sugos
```


<!-- Section from "doc/guides/11.Installation.md.hbs" End -->

<!-- Section from "doc/guides/20.Getting Started.md.hbs" Start -->

<a name="section-doc-guides-20-getting-started-md"></a>

Getting Started
---------

3 steps to be get started

1. [Setup SUGO-Cloud](#setup-sugo-cloud)
2. [Declare modules on SUGO-Actor](#declare-on-sugo-actor)
3. [Access to modules from SUGO-Caller](#call-from-sugo-caller)

<a id="setup-sugo-cloud"></a>
### Setup SUGO-Cloud

<a href="https://github.com/realglobe-Inc/sugo-cloud"><img src="assets/images/sugo-cloud-banner.png" alt="banner"
                                      height="40" style="height:40px"
/></a>

Setup a [SUGO-Cloud][sugo_cloud_url] server for actors and callers.

```javascript
#!/usr/bin/env node
/**
 * This is an example of SUGO-cloud
 * @see https://github.com/realglobe-Inc/sugo-cloud
 */
'use strict'

const sugoCloud = require('sugo-cloud')
const co = require('co')

co(function * () {
  // Start sugo-cloud server
  let cloud = yield sugoCloud({
    // Options
    port: 3000
  })
  console.log(`SUGO Cloud started at port: ${cloud.port}`)
}).catch((err) => { /* ... */ })

```

<a id="declare-on-sugo-actor"></a>
### Declare modules on SUGO-Actor

<a href="https://github.com/realglobe-Inc/sugo-actor"><img src="assets/images/sugo-actor-banner.png" alt="banner"
                                     height="40" style="height:40px"
/></a>

Create a [SUGO-Actor][sugo_actor_url] instance and declare modules. Then, connect to the cloud server.

```javascript
#!/usr/bin/env

/**
 * This is an example of SUGO-Actor
 * @see https://github.com/realglobe-Inc/sugo-actor
 */
'use strict'

const sugoActor = require('sugo-actor')
const { Module } = sugoActor
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let actor = sugoActor(`${CLOUD_URL}/actors`, {
    /** Name to identify this actor on the cloud */
    key: 'my-actor-01',
    /** Modules to provide */
    modules: {
      // Example of a simple call-return function module
      tableTennis: new Module({
        ping (pong = 'default pong!') {
          return co(function * () {
            /* ... */
            return `"${pong}" from actor!` // Return to the remote caller
          })
        }
      }),
      // Load plugin module
      timeBomb: require('./example-time-bomb-module')({})
    }
  })
  yield actor.connect() // Connect to cloud server
}).catch((err) => console.error(err))

```


<a id="call-from-sugo-caller"></a>
### Access to modules from SUGO-Caller

<a href="https://github.com/realglobe-Inc/sugo-caller"><img src="assets/images/sugo-caller-banner.png" alt="banner"
                                         height="40" style="height:40px"
/></a>

Create a [SUGO-Caller][sugo_caller_url] instance and connect to the actor with key.
Then get access to modules and call functions as you like.

```javascript
#!/usr/bin/env

/**
 * This is an example of SUGO-Caller
 * @see https://github.com/realglobe-Inc/sugo-caller
 */
'use strict'

const sugoCaller = require('sugo-caller')
const co = require('co')

const CLOUD_URL = 'http://localhost:3000'
co(function * () {
  let caller = sugoCaller(`${CLOUD_URL}/callers`)
  // Connect to an actor with key
  let actor01 = yield caller.connect('my-actor-01')

  // Using call-return function
  {
    let tableTennis = actor01.get('tableTennis')
    console.log(tableTennis)
    let pong = yield tableTennis.ping('hey!')
    console.log(pong) // -> `"hey!" from call!`
  }

  // Using event emitting interface
  {
    let timeBomb = actor01.get('timeBomb')
    let tick = (data) => console.log(`tick: ${data.count}`)
    timeBomb.on('tick', tick) // Add listener
    let booom = yield timeBomb.countDown(10)
    console.log(booom)
    timeBomb.off('tick', tick) // Remove listener
  }
}).catch((err) => console.error(err))

```


<!-- Section from "doc/guides/20.Getting Started.md.hbs" End -->

<!-- Section from "doc/guides/21.Advanced Usage.md.hbs" Start -->

<a name="section-doc-guides-21-advanced-usage-md"></a>

Advanced Usage
---------

### Using Event-Emit Interface

On actors, each module provides [EventEmitter][event_emitter_url] interface like `.on(ev, handler)` and `.emit(ev, data)` functions.

```javascript
/**
 * This is an example module
 */
'use strict'

const co = require('co')
const { Module } = require('sugo-actor')

class TimeBomb extends Module {
  // Example of event emitting function
  countDown (count) {
    const s = this
    return co(function * () {
      let abort = () => { count = -1 }
      s.on('abort', abort) // Listen to events from the caller
      while (count > 0) {
        count--
        s.emit('tick', { count }) // Emit an event to the caller
        yield new Promise((resolve) =>
          setTimeout(() => resolve(), 1000)
        )
      }
      s.off('abort', abort) // Remove event listener
      return count === -1 ? 'hiss...' : 'booom!!!'
    })
  }
}

function newTimeBomb (...args) {
  return new TimeBomb(...args)
}

module.exports = newTimeBomb // Pass factory method

```

[event_emitter_url]: https://nodejs.org/api/events.html#events_class_eventemitter


<!-- Section from "doc/guides/21.Advanced Usage.md.hbs" End -->

<!-- Section from "doc/guides/21.More Examples.md.hbs" Start -->

<a name="section-doc-guides-21-more-examples-md"></a>

More Examples
---------

There are example packages you can try out.

| Name | Description | Online Version | Deploy to your Heroku |
| ---- | ----------- | :----: | :---: |
| [sugo-example-rapiro](https://github.com/realglobe-Inc/sugo-example-rapiro) | SUGOS example project to contorl RAPIRO. | <a href="http://sugo-example-rapiro.herokuapp.com"><img style="height:48px" height="48" src="http://realglobe-inc.github.io/sugo-example-rapiro/images/favicon.png"/></a> | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sugo-example-rapiro/tree/heroku) |
| [sugo-example-say](https://github.com/realglobe-Inc/sugo-example-say) | SUGOS example project to invoke &#x60;say&#x60; command on remote MAC (OSX system is required) | <a href="http://sugo-example-say.herokuapp.com"><img style="height:48px" height="48" src="http://realglobe-inc.github.io/sugo-example-say/images/favicon.png"/></a> | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sugo-example-say/tree/heroku) |
| [sugo-example-plen](https://github.com/realglobe-Inc/sugo-example-plen) | SUGOS example project to contorl PLEN | <a href="http://sugo-example-plen.herokuapp.com"><img style="height:48px" height="48" src="http://realglobe-inc.github.io/sugo-example-plen/images/favicon.png"/></a> | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sugo-example-plen/tree/heroku) |
| [sugo-example-roomba](https://github.com/realglobe-Inc/sugo-example-roomba) | SUGOS example project to contorl roomba | <a href="http://sugo-example-roomba.herokuapp.com"><img style="height:48px" height="48" src="http://realglobe-inc.github.io/sugo-example-roomba/images/favicon.png"/></a> | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sugo-example-roomba/tree/heroku) |


<!-- Section from "doc/guides/21.More Examples.md.hbs" End -->

<!-- Section from "doc/guides/30.Related packages.md.hbs" Start -->

<a name="section-doc-guides-30-related-packages-md"></a>

Related Packages
---------

There are a bunch of related package and there are listed in [sugos-index page][sugos_index_url]

+ [Core packages](https://github.com/realglobe-Inc/sugos-index#package-group-Core) - Core of SUGOS
+ [Demo packages](https://github.com/realglobe-Inc/sugos-index#package-group-Demo) - Demo for SUGOS scaffolding
+ [Example packages](https://github.com/realglobe-Inc/sugos-index#package-group-Example) - Example project using SUGOS framework
+ [Module packages](https://github.com/realglobe-Inc/sugos-index#package-group-Module) - Module plugins for SUGOS-Actor
+ [Middleware packages](https://github.com/realglobe-Inc/sugos-index#package-group-Middleware) - Middleware plugins for SUGO-Cloud
+ [Endpoint packages](https://github.com/realglobe-Inc/sugos-index#package-group-Endpoint) - Endpoint plugins for SUGO-Cloud
+ [Agent packages](https://github.com/realglobe-Inc/sugos-index#package-group-Agent) - Agent of endpoints
+ [Helper packages](https://github.com/realglobe-Inc/sugos-index#package-group-Helper) - Helper packages.


[sugos_index_url]: https://github.com/realglobe-Inc/sugos-index#readme


<!-- Section from "doc/guides/30.Related packages.md.hbs" End -->

<!-- Section from "doc/guides/40. Contributors.md.hbs" Start -->

<a name="section-doc-guides-40-contributors-md"></a>

Contributors
------------

+ [Taka Okunishi](https://github.com/okunishinishi)
+ [Fukuchi Daisuke](https://github.com/fukuchidaisuke)
+ [Fuji Haruka](https://github.com/FujiHaruka)


<!-- Section from "doc/guides/40. Contributors.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sugos/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugo-cloud][sugo_cloud_url]
+ [sugo-actor][sugo_actor_url]
+ [sugo-caller][sugo_caller_url]
+ [sugos-index][sugos_index_url]
+ [sugos.tech][sugos_tech_url]

[sugo_cloud_url]: https://github.com/realglobe-Inc/sugo-cloud
[sugo_actor_url]: https://github.com/realglobe-Inc/sugo-actor
[sugo_caller_url]: https://github.com/realglobe-Inc/sugo-caller
[sugos_index_url]: https://github.com/realglobe-Inc/sugos-index#readme
[sugos_tech_url]: http://www.sugos.tech

<!-- Links End -->
