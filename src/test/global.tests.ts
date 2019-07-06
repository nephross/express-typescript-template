import * as dotenv from 'dotenv';
import log from './../lib/utils/log';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
import { before, after } from 'mocha';

// This will clear the test database before we run any tests
before(function(done) {
  console.log('Running global.tests.js');
  if (process.env.CONFIG_ENABLE_TESTS === undefined ||
      process.env.CONFIG_ENABLE_TESTS === null ||
      process.env.CONFIG_ENABLE_TESTS.toLowerCase() === 'false') {
        log.error('Tests will not be run unless the environment variable CONFIG_ENABLE_TESTS = true.');
        process.exit(1);
  }
  done();
});

before(async () => {
  // this is where you would start your db connections if you have any.
});

after(async () => {
  // this is where you would close down all opened connection after all tests have run.
});
