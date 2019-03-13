'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = (string) => {
  return string.substr(2)
}
const cutLast = (string) => {
  return string.slice(0, -2)
}

const cutFirstLast = (string) => {
  return string.substr(2).slice(0, -2)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length,1)
assert.strictEqual(cutFirst('STR'), 'R')
assert.strictEqual(cutFirst('Hello World'), 'llo World')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length,1)
assert.strictEqual(cutLast('STR'), 'S')
assert.strictEqual(cutLast('Hello World'), 'Hello Wor')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length,1)
assert.strictEqual(cutFirstLast('STR'), '')
assert.strictEqual(cutFirstLast('Hello World'), 'llo Wor')

// End of tests */
