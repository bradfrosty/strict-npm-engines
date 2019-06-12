const test = require('ava')

const { strictNpmEngines } = require('../')

test('strictNpmEngines is a function', function (t) {
  t.is(typeof strictNpmEngines, 'function')
})
