'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (string) => {
  return string.substring(0,2)
}

const keepLast = (string) => {
  return string.slice(-2)
}

const keepFirstLast = (string) => {
  return string.substring(2,4)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length,1)
assert.strictEqual(keepFirst('STR'), 'ST')
assert.strictEqual(keepFirst('Hello World'), 'He')

assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length,1)
assert.strictEqual(keepLast('STR'), 'TR')
assert.strictEqual(keepLast('Hello World'), 'ld')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length,1)
assert.strictEqual(keepFirstLast('STR'), 'R')
assert.strictEqual(keepFirstLast('Hello World'), 'll')


// End of tests */
