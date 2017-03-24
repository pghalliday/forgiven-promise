import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.should();
chai.use(chaiAsPromised);

import {
  create,
} from 'forgiven';
import {
  mocha,
} from 'forgiven-mocha';
import {
  promise,
} from '../src';

global.given = create(mocha, {
  promise,
});
