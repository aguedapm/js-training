'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

const yell = (string) => {
  return string.toUpperCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length,1)
assert.strictEqual(yell('str'), 'STR')
assert.strictEqual(yell('qsdqsdqsd'), 'QSDQSDQSD')
assert.strictEqual(yell('STR'), 'STR')
assert.strictEqual(yell('zapZAP'), 'ZAPZAP')

// End of tests */
