# forgiven-promise

[![Build Status](https://travis-ci.org/pghalliday/forgiven-promise.svg?branch=master)](https://travis-ci.org/pghalliday/forgiven-promise)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/forgiven-promise/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/forgiven-promise?branch=master)

[Forgiven](https://github.com/pghalliday/forgiven) extension for recording promises returned from setup steps 

## Usage

```shell
npm install --save-dev forgiven forgiven-mocha forgiven-promise
```

```javascript
import {
  create,
} from 'forgiven';
import {
  mocha,
} from 'forgiven-mocha';
import {
  promise,
} from 'forgiven-promise';

global.given = create(mocha, {
  promise: promise,
});

const context = {};

given.a.promise.as(context, 'promise').from(() => Promise.reject(new Error('FAIL')))
.then(() => context.promise.should.be.rejectedWith('FAIL'))
.end();
```

## Contributing

Run unit tests and build before pushing/opening a pull request.

- `npm test` - lint and test
- `npm start` - watch and build, etc with alarmist
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
