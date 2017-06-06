# sugo-actor@6.0.1

Actor component of SUGOS.

+ Functions
  + [sugoActor(config)](#sugo-actor-function-sugo-actor)
+ [`SugoActor`](#sugo-actor-class) Class
  + [new SugoActor(url, config)](#sugo-actor-class-sugo-actor-constructor)
  + [actor.connect()](#sugo-actor-class-sugo-actor-connect)
  + [actor.disconnect()](#sugo-actor-class-sugo-actor-disconnect)
  + [actor.perform(data)](#sugo-actor-class-sugo-actor-perform)
  + [actor.load(moduleName, module)](#sugo-actor-class-sugo-actor-load)
  + [actor.loadSub(moduleName, subModules)](#sugo-actor-class-sugo-actor-loadSub)
  + [actor.unload(moduleName)](#sugo-actor-class-sugo-actor-unload)
  + [actor.unloadSub(moduleName, subModuleNames)](#sugo-actor-class-sugo-actor-unloadSub)
  + [actor.assertConnection()](#sugo-actor-class-sugo-actor-assertConnection)
  + [actor.urlFromConfig()](#sugo-actor-class-sugo-actor-urlFromConfig)
  + [actor.parseActorUrl()](#sugo-actor-class-sugo-actor-parseActorUrl)

## Functions

<a class='md-heading-link' name="sugo-actor-function-sugo-actor" ></a>

### sugoActor(config) -> `SugoActor`

Create an actor instance. Just an alias of `new SugoActor(config)`

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Sugo caller configuration |

**Example**:

```javascript
co(function * () {
  let actor = sugoActor({
    key: 'my-actor-01',
    modules: {
    }
  })
  yield actor.connect()
}).catch((err) => console.error(err))
```


<a class='md-heading-link' name="sugo-actor-class"></a>

## `SugoActor` Class



**Extends**:

+ `SugoClient`



<a class='md-heading-link' name="sugo-actor-class-sugo-actor-constructor" ></a>

### new SugoActor(url, config)

Constructor of SugoActor class

| Param | Type | Description |
| ----- | --- | -------- |
| url | string | Cloud server url |
| config | object | Configurations |
| config.key | string | Key of actor |
| config.auth | object | Auth object |
| config.modules | object.&lt;String, SugoActorModule&gt; | Modules to load. |
| config.path | string | Socket.IO option. |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-connect" ></a>

### actor.connect() -> `Promise`

Connect to hub.
By call this, actor share specification of the modules to hub so that callers can access them.

<a class='md-heading-link' name="sugo-actor-class-sugo-actor-disconnect" ></a>

### actor.disconnect() -> `Promise`

Disconnect from the hub

<a class='md-heading-link' name="sugo-actor-class-sugo-actor-perform" ></a>

### actor.perform(data) -> `Promise`

Handle perform event

| Param | Type | Description |
| ----- | --- | -------- |
| data | object |  |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-load" ></a>

### actor.load(moduleName, module) -> `Promise`

Load a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | Object | Module to load |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-loadSub" ></a>

### actor.loadSub(moduleName, subModules) -> `Promise`

Load sub modules

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string |  |
| subModules | Object |  |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-unload" ></a>

### actor.unload(moduleName) -> `Promise`

Unload a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-unloadSub" ></a>

### actor.unloadSub(moduleName, subModuleNames) -> `*`

Unload sub module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| subModuleNames | Array.&lt;string&gt; | Name of sub modules |


<a class='md-heading-link' name="sugo-actor-class-sugo-actor-assertConnection" ></a>

### actor.assertConnection()

Assert if the connected to hub

<a class='md-heading-link' name="sugo-actor-class-sugo-actor-urlFromConfig" ></a>

### actor.urlFromConfig()



<a class='md-heading-link' name="sugo-actor-class-sugo-actor-parseActorUrl" ></a>

### actor.parseActorUrl()

Parse actor url



