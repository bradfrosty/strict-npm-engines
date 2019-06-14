const test = require('ava')

const { packageJson } = require('../lib/packageJson')

test('packageJson is a function', function (t) {
  t.is(typeof packageJson, 'function')
})

test('packageJson::enforceVersion invalid node version', async function (t) {
  const pkg = await packageJson()
  t.throws(
    () => pkg.enforceVersion('node', 'v2.0.0'),
    'Invalid node version. Expected >=12 but got 2.0.0.'
  )
})

test('packageJson::enforceVersion invalid npm version', async function (t) {
  const pkg = await packageJson()
  t.throws(
    () => pkg.enforceVersion('npm', '6.0.0'),
    'Invalid npm version. Expected >=6.9 but got 6.0.0.'
  )
})

test('packageJson::enforceVersion valid node version', async function (t) {
  const pkg = await packageJson()
  t.is('13.0.0', pkg.enforceVersion('node', '13.0.0'))
})

test('packageJson::enforceVersion valid npm version', async function (t) {
  const pkg = await packageJson()
  t.is('7.0.0', pkg.enforceVersion('npm', '7.0.0'))
})
