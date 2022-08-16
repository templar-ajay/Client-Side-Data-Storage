### What is Client Side Storage ?

JavaScript APIs that allow you to store data on the client

- cookies - don't use cookies unless you have to

### Client Side Storages

- Web Storage APIs - local storage , session storage(until you close the browser).
- IndexedDB -
- Service Workers(offline) and Cache API

#### other client storage options -

- LocalForage
- Dexie
- Zango
- JsStore

### A few facts

- local storage stays as long as you want
- session storage is cleared when you close the browser
- both use key value pairs
- No objects and array allowed
- Domain Specific

### Web Storage Methods

- setItem("key","value)
- getItem("key")
- removeItem("key")
