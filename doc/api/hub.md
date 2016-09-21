# sugo-hub@4.0.6

Hub server of SUGOS

+ Functions
  + [sugoHub()](#sugo-hub-function-sugo-hub)
+ [SugoHub](sugo-hub-classes) Class
  + [new SugoHub(options)](#sugo-hub-classes-sugo-hub-constructor)

## Functions

<a class='md-heading-link' name="sugo-hub-function-sugo-hub" ></a>

### sugoHub() -> `Promise.<SugoHub>`

Create a hub instance. Just an alias of `new SugoCaller(config)`
```javascript
co(function * () {
  let hub = sugoHub({
  // Options here
  })
  yield hub.listen(3000)
}).catch((err) => console.error(err))
```


<a class='md-heading-link' name="sugo-hub-classes"></a>

## SugoHub Class

Hub server of SUGOS


<a class='md-heading-link' name="sugo-hub-classes-sugo-hub-constructor" ></a>

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




