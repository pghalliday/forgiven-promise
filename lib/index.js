'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promise = promise;
// only require forgiven if not a browser build
// istanbul ignore else
if (!forgiven) {
  // eslint-disable-next-line no-var
  var forgiven = require('forgiven');
}

var PROMISE_CONJUNCTIONS = ['from'];

function promise(setup) {
  return {
    as: function as(context, name) {
      if (typeof context === 'string') {
        name = context;
        context = undefined;
      }
      var nameStr = void 0;
      if (typeof name === 'undefined') {
        // istanbul ignore else
        if (typeof context === 'function') {
          nameStr = forgiven.descriptionFromFuncStr(context.toString());
        } else {
          throw new Error('no name provided for promise');
        }
      } else {
        nameStr = '`' + name + '`';
      }
      var setupPromise = function setupPromise(conjunction, description, _beforeEach, afterEach) {
        if (typeof description === 'function') {
          afterEach = afterEach;
          _beforeEach = description;
          description = forgiven.descriptionFromFuncStr(_beforeEach);
        }
        // istanbul ignore if
        if (typeof _beforeEach !== 'function') {
          throw new Error('beforeEach not specified');
        }
        return setup({
          description: 'as ' + nameStr + ' ' + conjunction + ' ' + description,
          beforeEach: function beforeEach(done) {
            var promise = _beforeEach();
            context = context || this;
            if (typeof context === 'function') {
              context(promise);
            } else {
              context[name] = promise;
            }
            // don't fail setup
            // we will want to check
            // the status of the promise
            // later
            promise.then(function () {
              done();
            }).catch(function () {
              done();
            });
          },
          afterEach: afterEach
        });
      };
      var chain = {};
      PROMISE_CONJUNCTIONS.forEach(function (conjunction) {
        chain[conjunction] = setupPromise.bind(null, conjunction);
      });
      return chain;
    }
  };
};