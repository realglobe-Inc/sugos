# sugo-actor@4.4.0

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

<a name="sugo-actor-function-sugo-actor" />
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


<a name="sugo-actor-classes"/>
## SugoActor Class




<a name="sugo-actor-classes-sugo-actor-constructor" />
### new SugoActor(url, config)

Constructor of SugoActor class

| Param | Type | Description |
| ----- | --- | -------- |
| url | string | Cloud server url |
| config | object | Configurations |
| config.key | string | Key of actor |
| config.auth | object | Auth object |
| config.modules | object.&lt;String, SugoActorModule&gt; | Modules to load. |


<a name="sugo-actor-classes-sugo-actor-connect" />
### actor.connect() -> `Promise`

Connect to hub.
By call this, actor share specification of the modules to hub so that callers can access them.

<a name="sugo-actor-classes-sugo-actor-disconnect" />
### actor.disconnect() -> `Promise`

Disconnect from the hub

<a name="sugo-actor-classes-sugo-actor-perform" />
### actor.perform(data) -> `Promise`

Handle perform event

| Param | Type | Description |
| ----- | --- | -------- |
| data | object |  |


<a name="sugo-actor-classes-sugo-actor-load" />
### actor.load(moduleName, module) -> `Promise`

Load a module

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string | Name of module |
| module | Object | Module to load |


<a name="sugo-actor-classes-sugo-actor-loadSub" />
### actor.loadSub(moduleName, subModules) -> `Promise`

Load submodules

| Param | Type | Description |
| ----- | --- | -------- |
| moduleName | string |  |
| subModules | Object |  |


<a name="sugo-actor-classes-sugo-actor-unload" />
### actor.unload(name) -> `Promise`

Unload module with name

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of module |




