'use strict';
import assert from 'assert';
import batchreplace from '../lib';

describe('batchreplace', function () {
  it('replaces from a map', function () {
    let fn = batchreplace.mapReplacer({a: 1, b: 2});
    assert.equal(fn('a b c'), '1 2 c');
  });
});
