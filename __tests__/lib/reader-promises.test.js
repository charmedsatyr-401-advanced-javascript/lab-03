'use strict';

jest.mock('fs');

const read = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {
  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt', 'bad.txt', 'bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    return read(files).catch(err => expect(err).toBeDefined());
  });

  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    console.log(read(files));
    return read(files)
      .then(data => {
        expect(data instanceof Array).toBeTruthy();
        expect(data.length).toBe(3);
      })
      .catch(err => expect(err).toBeDefined());
  });
});
