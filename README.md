## Paystack ![Build status](https://travis-ci.org/theslyone/node-paystack.svg?branch=master)

Nodejs API wrapper for [Emly](https://emly.cc/).

### Installation

```
npm install emly-nodejs
```

### Usage

```js
// Require the library
var emly = require('emly-nodejs')('secret_key');
```

#### Making calls to the resources
The resource methods accepts are promisified, but can receive optional callback as the last argument.

```js
// First Option
// emly.{resource}.{method}

```
```js
// Second Option
// emly.{resource}
```



For resource methods that use POST or PUT, the JSON body can be passed as the first argument.

```js

```

For GET, you can pass the required ID as string and optional parameters as an optional object argument.

```js

```

```js

```

### Resources

- links
  - list
  - store
  - show
  - update
  - delete
- spaces
  - list
  - store
  - show
  - update
  - delete
- plan
  - list
  - store
  - show
  - update
  - delete
- domain
  - list
  - store
  - show
  - update
  - delete
- pixel
  - list
  - store
  - show
  - update
  - delete
- stats
  - list
  - store
  - show
  - update
  - delete
- account
  - show
  


### Contributing
- To ensure consistent code style, please follow the [editorconfig rules](http://obem.be/2015/06/01/a-quick-note-on-editorconfig.html) in .editorconfig

### Tests

To run tests, add your Paystack test secret key to `package.json`. (The test line should look something like this: `env KEY=sk_test_1a68ac96a0171fb72111a24295d8d31d41c28eed ./node_modules/.bin/mocha...`). Now run:

```
npm test
```

If you are contributing to the repo, kindly update the necessary test file in `/test` or add a new one and ensure all tests are passed before sending a PR.

### Todo

- Proper resource examples
- ES6 support
