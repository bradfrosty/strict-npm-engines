#!/usr/bin/env node

const chalk = require('chalk')
const { strictNpmEngines } = require('../')

/**
 * @returns {undefined} prints an error and exits if the wrong engine is used.
 */
async function main () {
  try {
    await strictNpmEngines()
    process.exit(0)
  } catch (error) {
    process.stderr.write(chalk.white.bgRed.bold(error.message) + '\n')
    process.exit(1)
  }
}

main()
