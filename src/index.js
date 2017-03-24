// only require forgiven if not a browser build
// istanbul ignore else
if (!forgiven) {
  // eslint-disable-next-line no-var
  var forgiven = require('forgiven');
}

const PROMISE_CONJUNCTIONS = [
  'from',
];

export function promise(setup) {
  return {
    as: function(context, name) {
      if (typeof context === 'string') {
        name = context;
        context = undefined;
      }
      let nameStr;
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
      const setupPromise = (
        conjunction,
        description,
        beforeEach,
        afterEach
      ) => {
        if (typeof description === 'function') {
          afterEach = afterEach;
          beforeEach = description;
          description = forgiven.descriptionFromFuncStr(beforeEach);
        }
        // istanbul ignore if
        if (typeof beforeEach !== 'function') {
          throw new Error('beforeEach not specified');
        }
        return setup({
          description: 'as ' + nameStr + ' ' + conjunction + ' ' + description,
          beforeEach: function(done) {
            const promise = beforeEach();
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
            promise
            .then(() => {
              done();
            })
            .catch(() => {
              done();
            });
          },
          afterEach,
        });
      };
      const chain = {};
      PROMISE_CONJUNCTIONS.forEach((conjunction) => {
        chain[conjunction] = setupPromise.bind(null, conjunction);
      });
      return chain;
    },
  };
};
