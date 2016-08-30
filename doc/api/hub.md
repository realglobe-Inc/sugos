# sugo-hub@4.0.1

Hub server of SUGOS

+ Functions
  + [sugoHub()](#sugo-hub-function-sugo-hub)
+ [SugoHub](sugo-hub-classes) Class
  + [new SugoHub(options)](#sugo-hub-classes-sugo-hub-constructor)

## Functions

<a name="sugo-hub-function-sugo-hub" />
### sugoHub() -> `Promise.<SugoHub>`

Create a hub instance. Just an alias of `new SugoCaller(config)`
```javascript
co(function * () {
  let cloud = sugoHub({
  // Options here
  })
  yield hub.listen(3000)
}).catch((err) => console.error(err))
```


<a name="sugo-hub-classes"/>
## SugoHub Class

Hub server of SUGOS


<a name="sugo-hub-classes-sugo-hub-constructor" />
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
| options.invalidateInterval | number | Interval for invalidate loop |




