const semver = require('semver')
const readPackageJson = require('read-pkg')

async function packageJson () {
  let packageContents = await readPackageJson()

  function getExpectedVersion (engine) {
    return packageContents.engines[engine]
  }

  function compareToEngine (engine, version) {
    return semver.satisfies(version, getExpectedVersion(engine))
  }

  return {
    enforceVersion (engine, version) {
      const cleanedVersion = semver.clean(version)
      const isValid = compareToEngine(engine, cleanedVersion)

      if (!isValid) {
        throw new Error(
          `Invalid ${engine} version. Expected ${getExpectedVersion(
            engine
          )} but got ${cleanedVersion}.`
        )
      }

      return cleanedVersion
    }
  }
}

module.exports = {
  packageJson
}
