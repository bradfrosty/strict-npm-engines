const semver = require('semver')
const readPackageJson = require('read-pkg')

function packageJson () {
  let packageContents

  async function ensurePackageJson () {
    packageContents = await readPackageJson()
  }

  return {
    async compareToEngine (engine, version) {
      await ensurePackageJson()

      return semver.satisfies(version, packageContents.engines[engine])
    }
  }
}

module.exports = {
  packageJson
}
