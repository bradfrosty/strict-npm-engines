const test = require('ava')

const { strictNpmEngines } = require('../')

test('strictNpmEngines is a function', function (t) {
  t.is(typeof strictNpmEngines, 'function')
})

test('strictNpmEngines', async function (t) {
  const result = await strictNpmEngines()

  t.deepEqual(result, {
    npm: '6.9.0',
    node: '12.2.0'
  })
})
