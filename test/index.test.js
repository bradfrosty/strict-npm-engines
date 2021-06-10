const test = require('ava')
const semver = require('semver')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

const { strictNpmEngines } = require('../')

test('strictNpmEngines is a function', function (t) {
  t.is(typeof strictNpmEngines, 'function')
})

test('strictNpmEngines does not throw with valid range', async function (t) {
  await t.notThrowsAsync(strictNpmEngines)
})

test('strictNpmEngines returns current versions if valid', async function (t) {
  const result = await strictNpmEngines()

  t.deepEqual(result, {
    node: semver.clean(process.version),
    npm: semver.clean((await exec('npm --version')).stdout)
  })
})
