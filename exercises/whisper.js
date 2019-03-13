'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = (string) => {
  return '*' + string.toLowerCase() + '*'
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length,1)
assert.strictEqual(whisper('STR'), '*str*')
assert.strictEqual(whisper('qsdqsdqsd'), '*qsdqsdqsd*')
assert.strictEqual(whisper('str'), '*str*')
assert.strictEqual(whisper('zapZAP'), '*zapzap*')

// End of tests */
