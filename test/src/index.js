const context = {};
let promise;

given.a.promise.as('promise').from(
  'make promise',
  () => Promise.resolve('hello')
)
.then(function() {
  // eslint-disable-next-line no-invalid-this
  this.promise.should.eventually.become('hello');
})
.end();

given.a.promise.as('promise').from(() => Promise.resolve('hello'))
.then(function() {
  // eslint-disable-next-line no-invalid-this
  this.promise.should.eventually.become('hello');
})
.end();

given.a.promise.as('promise').from(() => Promise.reject(new Error('FAIL')))
.then(function() {
  // eslint-disable-next-line no-invalid-this
  this.promise.should.be.rejectedWith('FAIL');
})
.end();

given.a.promise.as(context, 'promise').from(
  () => Promise.reject(new Error('FAIL'))
)
.then(() => context.promise.should.be.rejectedWith('FAIL'))
.end();

given.a.promise.as((p) => {
  promise = p;
}).from(() => Promise.reject(new Error('FAIL')))
.then(() => promise.should.be.rejectedWith('FAIL'))
.end();
