# sugo-caller@3.0.2

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

## Functions

<a name="sugo-caller-function-sugo-caller" />
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


<a name="sugo-caller-classes"/>
## SugoCaller Class

Hub client for caller side.
When you connect to remote actor with a caller, it receives specification of the actor and dynamically define function kick actor side function.
This way you can magically call functions declared on remote as if they were here.


<a name="sugo-caller-classes-sugo-caller-constructor" />
### new SugoCaller(config)

Constructor of SugoCaller class

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Caller configuration |
| config.protocol | string | Protocol to use ( "http" or "https" ) |
| config.host | string | Hub host name. ( eg: "localhost:3000" ) |
| config.pathname | string | Hub URL path name ( eg: "/callers" ) |
| config.auth | Object | Auth data for hub |


<a name="sugo-caller-classes-sugo-caller-connect" />
### caller.connect(key) -> `Promise.<ActorAccessBundle>`

Connect to actor

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor |


<a name="sugo-caller-classes-sugo-caller-disconnect" />
### caller.disconnect(key) -> `Promise`

Disconnect from cloud server

| Param | Type | Description |
| ----- | --- | -------- |
| key | string | Key of actor to connect |


<a name="sugo-caller-classes"/>
## ActorAccessBundle Class

Bundle for actor access.
This class provides access for loaded modules on actor.


<a name="sugo-caller-classes-actor-access-bundle-constructor" />
### new ActorAccessBundle()

Constructor of ActorAccessBundle class



<a name="sugo-caller-classes-actor-access-bundle-get" />
### bundle.get(moduleName, options) -> `ActorAccessModule`

Get a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| options | Object | Optional settings |


<a name="sugo-caller-classes-actor-access-bundle-has" />
### bundle.has(moduleName) -> `Boolean`

Check if module exists

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a name="sugo-caller-classes-actor-access-bundle-set" />
### bundle.set(moduleName, module, options)

Set module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | ActorAccessModule | Module to set |
| options | Object | Optional settings |


<a name="sugo-caller-classes-actor-access-bundle-del" />
### bundle.del(moduleName)

Delete module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a name="sugo-caller-classes-actor-access-bundle-names" />
### bundle.names() -> `Array.<string>`

Get names of modules



