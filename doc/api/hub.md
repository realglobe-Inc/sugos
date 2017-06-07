# sugo-hub@7.0.1

Hub server of SUGOS

+ Functions
  + [sugoHub()](#sugo-hub-function-sugo-hub)
+ [`SugoHub`](#sugo-hub-class) Class
  + [new SugoHub(options)](#sugo-hub-class-sugo-hub-constructor)

## Functions

<a class='md-heading-link' name="sugo-hub-function-sugo-hub" ></a>

### sugoHub() -> `SugoHub`

Create a hub instance. Just an alias of `new SugoHub(config)`
**Example**:

```javascript
co(function * () {
  let hub = sugoHub({
  // Options here
  })
  yield hub.listen(3000)
}).catch((err) => console.error(err))
```


<a class='md-heading-link' name="sugo-hub-class"></a>

## `SugoHub` Class

Hub server of SUGOS




<a class='md-heading-link' name="sugo-hub-class-sugo-hub-constructor" ></a>

### new SugoHub(options)

Constructor of SugoHub class

| Param | Type | Description |
| ----- | --- | -------- |
| options | Object | Optional settings |
| options.storage | string,Object | Storage options |
| config.keys | string | Koa keys |
| options.endpoints | Object | Endpoint settings |
| config.context | Object | Koa context prototype |
| config.public | string | Public directories. |
| options.socketIoOptions | Object | Option object of Socket.IO constructor |
| options.localActors | Object | Local actor instances |
| options.logFile | string,boolean | File name to save logs. |




