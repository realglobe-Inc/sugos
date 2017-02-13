# sugo-actor@4.5.4

Actor component of SUGOS.

+ Functions
  + [sugoActor(config)](#sugo-actor-function-sugo-actor)
+ [SugoActor](sugo-actor-classes) Class
  + [new SugoActor(url, config)](#sugo-actor-classes-sugo-actor-constructor)
  + [actor.connect()](#sugo-actor-classes-sugo-actor-connect)
  + [actor.disconnect()](#sugo-actor-classes-sugo-actor-disconnect)
  + [actor.perform(data)](#sugo-actor-classes-sugo-actor-perform)
  + [actor.load(moduleName, module)](#sugo-actor-classes-sugo-actor-load)
  + [actor.loadSub(moduleName, subModules)](#sugo-actor-classes-sugo-actor-loadSub)
  + [actor.unload(name)](#sugo-actor-classes-sugo-actor-unload)

## Functions

<a class='md-heading-link' name="sugo-actor-function-sugo-actor" ></a>

### sugoActor(config) -> `SugoActor`

Create an actor instance. Just an alias of `new SugoActor(config)`

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object | Sugo caller configuration |

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


<a class='md-heading-link' name="sugo-actor-classes"></a>

## SugoActor Class




<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-constructor" ></a>

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


<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-connect" ></a>

### actor.connect() -> `Promise`

Connect to hub.
By call this, actor share specification of the modules to hub so that callers can access them.

<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-disconnect" ></a>

### actor.disconnect() -> `Promise`

Disconnect from the hub

<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-perform" ></a>

### actor.perform(data) -> `Promise`

Handle perform event

| Param | Type | Description |
| ----- | --- | -------- |
| data | object |  |


<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-load" ></a>

### actor.load(moduleName, module) -> `Promise`

Load a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | Object | Module to load |


<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-loadSub" ></a>

### actor.loadSub(moduleName, subModules) -> `Promise`

Load sub modules

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string |  |
| subModules | Object |  |


<a class='md-heading-link' name="sugo-actor-classes-sugo-actor-unload" ></a>

### actor.unload(name) -> `Promise`

Unload module with name

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of module |




