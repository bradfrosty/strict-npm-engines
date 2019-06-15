const semver = require('semver')
const readPackageJson = require('read-pkg')

/**
 * @returns {Object} contains packageJson method enforceVersion.
 */
async function packageJson () {
  let packageContents = await readPackageJson()

  /**
   * @param {string} engine The engine to read.
   * @returns {string} the contents of the specified engine field.
   */
  function getExpectedVersion (engine) {
    return packageContents.engines[engine]
  }

  /**
   * @param {string} engine The engine to check against.
   * @param {version} version the actual version used.
   * @returns {boolean} true if the actual version satisfies the specified engine range.
   */
  function compareToEngine (engine, version) {
    return semver.satisfies(version, getExpectedVersion(engine))
  }

  return {
    /**
     * @param {string} engine The engine to check against.
     * @param {version} version the actual version used.
     * @returns {string} The version normalized by semver.
     * @throws when the actual version does not satisfy the engine range.
     */
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
