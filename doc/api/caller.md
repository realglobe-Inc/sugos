# sugo-caller@5.0.4

Caller component of SUGOS.

+ Functions
  + [sugoCaller(config)](#sugo-caller-function-sugo-caller)
+ [`SugoCaller`](#sugo-caller-class) Class
  + [new SugoCaller(config)](#sugo-caller-class-sugo-caller-constructor)
  + [caller.connect(key, options)](#sugo-caller-class-sugo-caller-connect)
  + [caller.disconnect(key, options)](#sugo-caller-class-sugo-caller-disconnect)
  + [caller.urlFromConfig()](#sugo-caller-class-sugo-caller-urlFromConfig)
+ [`ActorAccessBundle`](#sugo-caller-class) Class
  + [new ActorAccessBundle(specs)](#sugo-caller-class-actor-access-bundle-constructor)
  + [bundle.get(moduleName, options)](#sugo-caller-class-actor-access-bundle-get)
  + [bundle.has(moduleName)](#sugo-caller-class-actor-access-bundle-has)
  + [bundle.set(moduleName, module, options)](#sugo-caller-class-actor-access-bundle-set)
  + [bundle.del(moduleName)](#sugo-caller-class-actor-access-bundle-del)
  + [bundle.names()](#sugo-caller-class-actor-access-bundle-names)
+ [`ActorAccessModule`](#sugo-caller-class) Class
  + [new ActorAccessModule(methods, connection)](#sugo-caller-class-actor-access-module-constructor)

## Functions

<a class='md-heading-link' name="sugo-caller-function-sugo-caller" ></a>

### sugoCaller(config) -> `SugoCaller`

Create a caller instance. Just an alias of `new SugoCaller(config)`

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Sugo caller configuration |

**Example**:

```javascript
co(function * () {
  let caller = sugoCaller({})
  let actor01 = yield caller.connect('my-actor-01')
  let foo = actor01.get('foo') // Get a module of actor
  yield foo.sayYeah() // Call the remote function
}).catch((err) => console.error(err))
```


<a class='md-heading-link' name="sugo-caller-class"></a>

## `SugoCaller` Class

Hub client for caller side.
When you connect to remote actor with a caller, it receives specification of the actor and dynamically define function to kick actor side function.
With this way you can magically call functions declared on remote as if they were here.

**Extends**:

+ `SugoClient`



<a class='md-heading-link' name="sugo-caller-class-sugo-caller-constructor" ></a>

### new SugoCaller(config)

Constructor of SugoCaller class

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Caller configuration |
| config.protocol | string | Protocol to use ( "http" or "https" ) |
| config.host | string | Hub host name. ( eg: "localhost:3000" ) |
| config.pathname | string | Hub URL path name ( eg: "/callers" ) |
| config.auth | Object | Auth data for hub |


<a class='md-heading-link' name="sugo-caller-class-sugo-caller-connect" ></a>

### caller.connect(key, options) -> `Promise.<ActorAccessBundle>`

Connect to actor

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor |
| options | Object | Optional settings |
| options.messages | Object | Connect messages |


<a class='md-heading-link' name="sugo-caller-class-sugo-caller-disconnect" ></a>

### caller.disconnect(key, options) -> `Promise`

Disconnect from cloud server

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor to connect |
| options | Object | Optional settings |
| options.messages | Object | Disconnect messages |


<a class='md-heading-link' name="sugo-caller-class-sugo-caller-urlFromConfig" ></a>

### caller.urlFromConfig()



<a class='md-heading-link' name="sugo-caller-class"></a>

## `ActorAccessBundle` Class

Bundle for actor access.
This class provides access for loaded modules on actor.




<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-constructor" ></a>

### new ActorAccessBundle(specs)

Constructor of ActorAccessBundle class

| Param | Type | Description |
| ----- | --- | -------- |
| specs | Object | Actor module specs |


<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-get" ></a>

### bundle.get(moduleName, options) -> `ActorAccessModule`

Get a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| options | Object | Optional settings |


<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-has" ></a>

### bundle.has(moduleName) -> `Boolean`

Check if module exists

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-set" ></a>

### bundle.set(moduleName, module, options)

Set module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | ActorAccessModule | Module to set |
| options | Object | Optional settings |


<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-del" ></a>

### bundle.del(moduleName)

Delete module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a class='md-heading-link' name="sugo-caller-class-actor-access-bundle-names" ></a>

### bundle.names() -> `Array.<string>`

Get names of modules

<a class='md-heading-link' name="sugo-caller-class"></a>

## `ActorAccessModule` Class

Loaded module for an actor.
This class provides pseudo interfaces for remote actor module




<a class='md-heading-link' name="sugo-caller-class-actor-access-module-constructor" ></a>

### new ActorAccessModule(methods, connection)

Constructor of ActorAccessModule class

| Param | Type | Description |
| ----- | --- | -------- |
| methods | Object | Actor specifications for module methods |
| connection | Object | Actor connections |




