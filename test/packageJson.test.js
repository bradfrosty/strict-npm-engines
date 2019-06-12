const test = require('ava')

const { packageJson } = require('../lib/packageJson')

test('packageJson is a function', function (t) {
  t.is(typeof packageJson, 'function')
})

test('packageJson::compareToEngine is a function', function (t) {
  t.is(typeof packageJson().compareToEngine, 'function')
})

test('packageJson::compareToEngine compare node engine (invalid)', async function (t) {
  const result = await packageJson().compareToEngine('node', 'v8.2.3')

  t.is(result, false)
})

test('packageJson::compareToEngine compare node engine (valid)', async function (t) {
  const result = await packageJson().compareToEngine('node', 'v80.2.3')

  t.is(result, true)
})

test('packageJson::compareToEngine compare npm engine (invalid)', async function (t) {
  const result = await packageJson().compareToEngine('npm', 'v0.2.3')

  t.is(result, false)
})

test('packageJson::compareToEngine compare npm engine (valid)', async function (t) {
  const result = await packageJson().compareToEngine('npm', 'v8.2.3')

  t.is(result, true)
})
