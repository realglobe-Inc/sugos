# sugo-caller@3.2.2

Caller component of SUGOS.

+ Functions
  + [sugoCaller(config)](#sugo-caller-function-sugo-caller)
+ [SugoCaller](sugo-caller-classes) Class
  + [new SugoCaller(config)](#sugo-caller-classes-sugo-caller-constructor)
  + [caller.connect(key)](#sugo-caller-classes-sugo-caller-connect)
  + [caller.disconnect(key)](#sugo-caller-classes-sugo-caller-disconnect)
+ [ActorAccessBundle](sugo-caller-classes) Class
  + [new ActorAccessBundle()](#sugo-caller-classes-actor-access-bundle-constructor)
  + [bundle.get(moduleName, options)](#sugo-caller-classes-actor-access-bundle-get)
  + [bundle.has(moduleName)](#sugo-caller-classes-actor-access-bundle-has)
  + [bundle.set(moduleName, module, options)](#sugo-caller-classes-actor-access-bundle-set)
  + [bundle.del(moduleName)](#sugo-caller-classes-actor-access-bundle-del)
  + [bundle.names()](#sugo-caller-classes-actor-access-bundle-names)
+ [ActorAccessModule](sugo-caller-classes) Class
  + [new ActorAccessModule(methods, connection)](#sugo-caller-classes-actor-access-module-constructor)

## Functions

<a class='md-heading-link' name="sugo-caller-function-sugo-caller" ></a>

### sugoCaller(config) -> `SugoCaller`

Create a caller instance. Just an alias of `new SugoCaller(config)`

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Sugo caller configuration |

```javascript
co(function * () {
  let caller = sugoCaller({})
  let actor01 = yield caller.connect('my-actor-01')
  let foo = actor01.get('foo') // Get a module of actor
  yield foo.sayYeah() // Call the remote function
}).catch((err) => console.error(err))
```


<a class='md-heading-link' name="sugo-caller-classes"></a>

## SugoCaller Class

Hub client for caller side.
When you connect to remote actor with a caller, it receives specification of the actor and dynamically define function kick actor side function.
This way you can magically call functions declared on remote as if they were here.


<a class='md-heading-link' name="sugo-caller-classes-sugo-caller-constructor" ></a>

### new SugoCaller(config)

Constructor of SugoCaller class

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Caller configuration |
| config.protocol | string | Protocol to use ( "http" or "https" ) |
| config.host | string | Hub host name. ( eg: "localhost:3000" ) |
| config.pathname | string | Hub URL path name ( eg: "/callers" ) |
| config.auth | Object | Auth data for hub |


<a class='md-heading-link' name="sugo-caller-classes-sugo-caller-connect" ></a>

### caller.connect(key) -> `Promise.<ActorAccessBundle>`

Connect to actor

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor |


<a class='md-heading-link' name="sugo-caller-classes-sugo-caller-disconnect" ></a>

### caller.disconnect(key) -> `Promise`

Disconnect from cloud server

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor to connect |


<a class='md-heading-link' name="sugo-caller-classes"></a>

## ActorAccessBundle Class

Bundle for actor access.
This class provides access for loaded modules on actor.


<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-constructor" ></a>

### new ActorAccessBundle()

Constructor of ActorAccessBundle class



<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-get" ></a>

### bundle.get(moduleName, options) -> `ActorAccessModule`

Get a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| options | Object | Optional settings |


<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-has" ></a>

### bundle.has(moduleName) -> `Boolean`

Check if module exists

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-set" ></a>

### bundle.set(moduleName, module, options)

Set module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | ActorAccessModule | Module to set |
| options | Object | Optional settings |


<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-del" ></a>

### bundle.del(moduleName)

Delete module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a class='md-heading-link' name="sugo-caller-classes-actor-access-bundle-names" ></a>

### bundle.names() -> `Array.<string>`

Get names of modules

<a class='md-heading-link' name="sugo-caller-classes"></a>

## ActorAccessModule Class

Loaded module for an actor.
This class provides pseudo interfaces for remote actor module


<a class='md-heading-link' name="sugo-caller-classes-actor-access-module-constructor" ></a>

### new ActorAccessModule(methods, connection)

Constructor of ActorAccessModule class

| Param | Type | Description |
| ----- | --- | -------- |
| methods | Object | Actor specifications for module methods |
| connection | Object | Actor connections |




